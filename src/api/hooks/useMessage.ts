import { useMutation, useQuery } from "@tanstack/react-query";
import { messageService } from "../services/messageService";
import { AxiosResponse } from "axios";
import { Message, SendMessageData } from "@/types/message";

export const useSendMessage = () => {
  const sendMessageMutation = useMutation({
    mutationFn: messageService.sendMessage,
    onSuccess: (res: AxiosResponse<Message>) => {
      console.log(res.data);
    },
    onError: (error: Error) => {
      console.log(error);
    },
  });

  return sendMessageMutation;
};

export const useGetMessages = (messageData: SendMessageData) => {
  const getMessagesQueary = useQuery({
    queryKey: ["getMessagesQueary"],
    queryFn: async () => {
      try {
        const { data } = await messageService.getMessage(messageData);
        console.log(data);
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  return getMessagesQueary;
};
