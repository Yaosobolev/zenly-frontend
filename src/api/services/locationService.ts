import { AxiosResponse } from "axios";
import instance from "../config";
import { SendLocationData } from "@/types/location";

export const locationService = {
  setLocationRequest: async (
    requestData: SendLocationData
  ): Promise<AxiosResponse> => {
    const response = await instance.post(`/locations/${requestData.senderId}`, {
      latitude: requestData.latitude,
      longitude: requestData.longitude,
    });
    return response;
  },
};
