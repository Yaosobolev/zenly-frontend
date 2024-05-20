import {
  friendshipRequest,
  friendshipRequests,
  // friendshipRequests,
  sendFriendshipRequest,
} from "@/types/friendship";
import { AxiosResponse } from "axios";
import instance from "../config";

export const friendshipService = {
  sendRequestToFriend: async (
    requestData: sendFriendshipRequest
  ): Promise<AxiosResponse<friendshipRequest>> => {
    const response = await instance.post<friendshipRequest>(
      `/friendship/send-friend-request/${requestData.senderId}`,
      {
        receiverId: requestData.receiverId,
      }
    );
    return response;
  },

  getFriendRequests: async (
    userId: string
  ): Promise<AxiosResponse<friendshipRequests>> => {
    const response = await instance.get<friendshipRequests>(
      `/friendship/requests/${userId}`
    );
    return response;
  },
};
