import { LoginData, User } from "@/types";
import axios, { AxiosResponse } from "axios";

const API_URL = `${import.meta.env.VITE_BASE_URL}/api`;

export const authService = {
  login: async (loginData: LoginData): Promise<AxiosResponse<User>> => {
    const response = await axios.post<User>(
      `${API_URL}/auth/login`,
      {
        username: loginData.username,
        password: loginData.password,
      },
      { withCredentials: true }
    );
    return response;
  },
  register: async (password: string, username: string) => {
    const response = await axios.post(`${API_URL}/register`, {
      password,
      username,
    });
    return response.data;
  },
  logout: async () => {
    const response = await axios.post(`${API_URL}/logout`);
    return response.data;
  },
};
