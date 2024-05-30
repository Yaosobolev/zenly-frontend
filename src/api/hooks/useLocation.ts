import { useMutation } from "@tanstack/react-query";
import { locationService } from "../services/locationService";
import { AxiosResponse } from "axios";
import { SendFriendRequest } from "@/types/location";

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
