import {
  friendshipRequest,
  friendshipRequests,
  // friendshipRequests,
  sendRequestToFriendData,
} from "@/types/friendship";
import { AxiosResponse } from "axios";
import instance from "../config";

export const friendshipService = {
  sendRequestToFriend: async (
    requestData: sendRequestToFriendData
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

  acceptFriendRequest: async (
    requestId: number
  ): Promise<AxiosResponse<friendshipRequest>> => {
    const response = await instance.post<friendshipRequest>(
      "/friendship/accept-request",
      { requestId: requestId }
    );
    return response;
  },

  rejectFriendRequest: async (
    requestId: number
  ): Promise<AxiosResponse<friendshipRequest>> => {
    const response = await instance.post<friendshipRequest>(
      "/friendship/reject-request",
      { requestId: requestId }
    );
    return response;
  },
};
