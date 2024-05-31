import { useMutation, useQuery } from "@tanstack/react-query";
import { locationService } from "../services/locationService";
import { AxiosResponse } from "axios";
import { SendFriendRequest } from "@/types/location";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

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
        console.log("position", position);
        // console.log("position", countRef.current);
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
        console.log(data.request);
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
