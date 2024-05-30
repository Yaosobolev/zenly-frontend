import { AxiosResponse } from "axios";
import instance from "../config";
import { SendFriendRequest, SendLocationData } from "@/types/location";

export const locationService = {
  setLocationRequest: async (
    requestData: SendLocationData
  ): Promise<AxiosResponse<SendFriendRequest>> => {
    const response = await instance.post<SendFriendRequest>(
      `/locations/${requestData.senderId}`,
      {
        latitude: requestData.latitude,
        longitude: requestData.longitude,
      }
    );
    return response;
  },
};
