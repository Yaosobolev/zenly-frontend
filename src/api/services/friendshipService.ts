import { friendship, friendshipReauest } from "@/types";
import { AxiosResponse } from "axios";
import instance from "../config";

// login and register одинаковые, так как в будущем планируется дополнить поля регистрации!!!

export const friendshipService = {
  sendRequestToFriend: async (
    requestData: friendship
  ): Promise<AxiosResponse<friendshipReauest>> => {
    const response = await instance.post<friendshipReauest>(
      `/friendship/send-friend-request`,
      {
        senderId: requestData.senderId,
        receiverId: requestData.receiverId,
      }
    );
    return response;
  },

  //   register: async (loginData: LoginData): Promise<AxiosResponse<User>> => {
  //     const response = await instance.post<User>(`/auth/register`, {
  //       username: loginData.username,
  //       password: loginData.password,
  //     });
  //     return response;
  //   },
  //   me: async (userId?: string): Promise<AxiosResponse<User>> => {
  //     if (userId) {
  //       return await instance.get<User>(`/auth/me/${userId}`);
  //     } else {
  //       return await instance.get<User>(`/auth/isAuthenticated`);
  //     }
  //   },

  //   logout: () => {
  //     const response = instance.post<string>(`/auth/logout`);
  //     return response;
  //   },
};
