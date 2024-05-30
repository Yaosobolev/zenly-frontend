import { useMutation } from "@tanstack/react-query";
import { locationService } from "../services/locationService";
import { AxiosResponse } from "axios";

export const useSetLocationRequest = () => {
  const sendMessageMutation = useMutation({
    mutationFn: locationService.setLocationRequest,
    onSuccess: (res: AxiosResponse) => {
      console.log(res.data);
    },
    onError: (error: Error) => {
      console.log(error);
    },
  });

  return sendMessageMutation;
};
