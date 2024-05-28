import { AxiosResponse } from "axios";
import instance from "../config";
import { Message, Messages, SendMessageData } from "@/types/message";

export const messageService = {
  sendMessage: async (
    messageData: SendMessageData
  ): Promise<AxiosResponse<Message>> => {
    const response = await instance.post<Message>(
      `/messages/send/${messageData.senderId}`,
      {
        receiverId: messageData.receiverId,
        content: messageData.content,
      }
    );
    return response;
  },
  getMessage: async (
    messageData: SendMessageData
  ): Promise<AxiosResponse<Messages>> => {
    const response = await instance.get<Messages>(
      `/messages/${messageData.senderId}`,
      {
        params: {
          receiverId: messageData.receiverId,
        },
      }
    );
    return response;
  },
};
