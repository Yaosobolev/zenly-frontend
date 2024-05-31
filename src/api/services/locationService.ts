import { AxiosResponse } from "axios";
import instance from "../config";
import {
  FriendLocation,
  SendFriendRequest,
  SendLocationData,
} from "@/types/location";

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

  getLocationsRequest: async (
    requestData: string
  ): Promise<AxiosResponse<{ request: FriendLocation[] }>> => {
    const response = await instance.get<{ request: FriendLocation[] }>(
      `/locations/${requestData}`
    );
    return response;
  },
};
