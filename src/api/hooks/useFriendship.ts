import { useMutation } from "@tanstack/react-query";

import { friendshipService } from "../services/friendshipService";
import { friendshipReauest } from "@/types/auth";
import { AxiosResponse } from "axios";

export const useSendRequestToFriend = () => {
  const sendRequestToFriendMutation = useMutation({
    mutationFn: friendshipService.sendRequestToFriend,
    onSuccess: (res: AxiosResponse<friendshipReauest>) => {
      console.log(res.data);
    },
    onError: (error: Error) => {
      console.log(error);
    },
  });

  return sendRequestToFriendMutation;
};
