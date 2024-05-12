import { LoginData, User } from "@/types";
import { AxiosResponse } from "axios";
import instance from "../config";

// login and register одинаковые, так как в будущем планируется дополнить поля регистрации!!!

export const authService = {
  login: async (loginData: LoginData): Promise<AxiosResponse<User>> => {
    const response = await instance.post<User>(`/auth/login`, {
      username: loginData.username,
      password: loginData.password,
    });
    return response;
  },

  register: async (loginData: LoginData): Promise<AxiosResponse<User>> => {
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

  // logout: async () => {
  //   const response = await axios.post(`${API_URL}/logout`);
  //   return response.data;
  // },
};
