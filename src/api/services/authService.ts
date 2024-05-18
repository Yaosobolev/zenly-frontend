import { InputData, User } from "@/types/auth";
import { AxiosResponse } from "axios";
import instance from "../config";

// login and register одинаковые, так как в будущем планируется дополнить поля регистрации!!!

export const authService = {
  login: async (loginData: InputData): Promise<AxiosResponse<User>> => {
    const response = await instance.post<User>(`/auth/login`, {
      username: loginData.username,
      password: loginData.password,
    });
    return response;
  },

  register: async (loginData: InputData): Promise<AxiosResponse<User>> => {
    const response = await instance.post<User>(`/auth/register`, {
      username: loginData.username,
      password: loginData.password,
    });
    return response;
  },
  me: async (userId?: string): Promise<AxiosResponse<User>> => {
    if (userId) {
      return await instance.get<User>(`/auth/me/${userId}`);
    } else {
      return await instance.get<User>(`/auth/isAuthenticated`);
    }
  },

  logout: () => {
    const response = instance.post<string>(`/auth/logout`);
    return response;
  },
};
