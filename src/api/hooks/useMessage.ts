import { useMutation, useQuery } from "@tanstack/react-query";
import { messageService } from "../services/messageService";
import { AxiosResponse } from "axios";
import { Message, SendMessageData } from "@/types/message";
import { useMessageStore } from "@/store/messageStore";

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
  const setMessages = useMessageStore((state) => state.setMessages);

  const getMessagesQuery = useQuery({
    queryKey: [
      "getMessagesQuery",
      messageData.senderId,
      messageData.receiverId,
    ],
    queryFn: async () => {
      try {
        const { data } = await messageService.getMessage(messageData);
        setMessages(data.request);
        return data.request;
      } catch (error) {
        console.log(error);
        return [];
      }
    },
    enabled: !!messageData.senderId && !!messageData.receiverId,
  });

  return getMessagesQuery;
};
