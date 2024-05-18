import { friendship, friendshipReauest } from "@/types/friendship";
import { AxiosResponse } from "axios";
import instance from "../config";

export const friendshipService = {
  sendRequestToFriend: async (
    requestData: friendship
  ): Promise<AxiosResponse<friendshipReauest>> => {
    const response = await instance.post<friendshipReauest>(
      `/friendship/send-friend-request/${requestData.senderId}`,
      {
        receiverId: requestData.receiverId,
      }
    );
    return response;
  },
};
