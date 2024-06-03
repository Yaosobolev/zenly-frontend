import { useMutation, useQuery } from "@tanstack/react-query";
import { locationService } from "../services/locationService";
import { AxiosResponse } from "axios";
import { FriendLocation, SendFriendRequest } from "@/types/location";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { friendshipRequest } from "@/types/friendship";

export const useSetLocationRequest = () => {
  const sendMessageMutation = useMutation({
    mutationFn: locationService.setLocationRequest,
    onSuccess: (res: AxiosResponse<SendFriendRequest>) => {
      console.log(res.data);
    },
    onError: (error: Error) => {
      console.log(error);
    },
  });

  return sendMessageMutation;
};

export const useGeolocation = () => {
  const { userId } = useParams<{ userId: string }>();
  const [position, setPosition] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);
  const setLocationRequestMutation = useSetLocationRequest();

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const coords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        setPosition(coords);

        setLocationRequestMutation.mutate({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          senderId: userId!,
        });
      },
      (error) => {
        console.error("Error getting location:", error);
      },
      {
        enableHighAccuracy: true,
        maximumAge: 10000,
        timeout: 5000,
      }
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, []);
  return position;
};

export const useGetLocations = (userId: string) => {
  const getLocationsRequestsQueary = useQuery({
    queryKey: ["getLocations"],
    queryFn: async () => {
      try {
        const { data } = await locationService.getLocationsRequest(userId);
        return data.request;
      } catch (error) {
        console.log(error);
      }
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });

  return getLocationsRequestsQueary;
};

export const useFriendsLocations = (initialData: FriendLocation[] = []) => {
  const [friendsLocations, setFriendsLocations] =
    useState<FriendLocation[]>(initialData);
  useEffect(() => {
    if (initialData && Array.isArray(initialData)) {
      setFriendsLocations([...initialData]);
    }
  }, []);

  const handleRequest = (data: FriendLocation) => {
    setFriendsLocations((prevLocations) => {
      const existingFriendIndex = prevLocations.findIndex(
        (friend) => friend?.data?.id === data.data!.id
      );
      if (existingFriendIndex !== -1) {
        const updatedLocations = [...prevLocations];
        updatedLocations[existingFriendIndex] = data;
        return updatedLocations;
      } else {
        return [...prevLocations, data];
      }
    });
  };

  const removeRequest = (id: number) => {
    setFriendsLocations((prev) => prev.filter((req) => req.data.id !== id));
  };

  const addRequest = (data: { data: friendshipRequest }) => {
    const newFriend = data.data.sender || data.data.receiver;

    const dataFriendLocation = {
      data: {
        latitude: newFriend!.location!.latitude,
        longitude: newFriend!.location!.longitude,
        usename: newFriend!.username,
        id: newFriend!.id,
      },
    };
    setFriendsLocations((prev) => [...prev, dataFriendLocation]);
  };
  return {
    friendsLocations,
    handleRequest,
    removeRequest,
    addRequest,
  };
};
