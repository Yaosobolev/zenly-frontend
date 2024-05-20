import { useMutation, useQuery } from "@tanstack/react-query";

import { friendshipService } from "../services/friendshipService";
import { friendshipRequest } from "@/types/friendship";
import { AxiosResponse } from "axios";

export const useSendRequestToFriend = () => {
  const sendRequestToFriendMutation = useMutation({
    mutationFn: friendshipService.sendRequestToFriend,
    onSuccess: (res: AxiosResponse<friendshipRequest>) => {
      console.log(res.data);
    },
    onError: (error: Error) => {
      console.log(error);
    },
  });

  return sendRequestToFriendMutation;
};

export const useGetFriendRequests = (userId: string) => {
  const getFriendRequestsQueary = useQuery({
    queryKey: ["getFriendRequests"],
    queryFn: async () => {
      try {
        const { data } = await friendshipService.getFriendRequests(userId);
        console.log(data);
        return data.data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  return getFriendRequestsQueary;
};

export const useAcceptFriendRequest = () => {
  const acceptFriendRequestdMutation = useMutation({
    mutationFn: friendshipService.acceptFriendRequest,
    onSuccess: (res: AxiosResponse<friendshipRequest>) => {
      console.log(res.data);
    },
    onError: (error: Error) => {
      console.log(error);
    },
  });

  return acceptFriendRequestdMutation;
};

export const useRejectFriendRequest = () => {
  const rejectFriendRequestdMutation = useMutation({
    mutationFn: friendshipService.rejectFriendRequest,
    onSuccess: (res: AxiosResponse<friendshipRequest>) => {
      console.log(res.data);
    },
    onError: (error: Error) => {
      console.log(error);
    },
  });

  return rejectFriendRequestdMutation;
};
