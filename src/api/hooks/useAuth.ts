import { useMutation, useQuery } from "@tanstack/react-query";
import useAuthStore from "@/store/authStore";
import { authService } from "@/api/services/authService";
import { User, UserError } from "@/types";
import { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const setUser = useAuthStore((state) => state.setUser);
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: authService.login,
    onSuccess: (res: AxiosResponse<User>) => {
      setUser(res.data);
      navigate(`/${res.data.id}`);
    },
    onError: (error: Error) => {
      console.log(error);
    },
  });

  return loginMutation;
};

export const useRegister = () => {
  const setUser = useAuthStore((state) => state.setUser);
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: authService.register,
    onSuccess: (res: AxiosResponse<User>) => {
      setUser(res.data);
      navigate(`/login`);
    },
    onError: (error: Error) => {
      console.log(error);
    },
  });

  return loginMutation;
};

export const useMe = (userId?: string) => {
  const setUser = useAuthStore((state) => state.setUser);
  const navigate = useNavigate();

  const meQuery = useQuery({
    queryKey: ["me"],
    queryFn: async () => {
      try {
        const response = await authService.me(userId);
        setUser(response.data);
        navigate(`/${response.data.id}`);
        return response.data;
      } catch (error: unknown) {
        const customError = error as UserError;
        if (customError.response?.status === 403) {
          navigate(`/${customError.response?.data?.id}`);
        } else {
          setUser(null);
          navigate(`/login`);
        }
        return null;
      }
    },
  });

  return meQuery;
};

export const useLogout = () => {
  const setUser = useAuthStore((state) => state.setUser);

  const logoutMutation = useMutation({
    mutationFn: authService.logout,
    onSuccess: () => {
      setUser(null);
    },
    onError: (error: Error) => {
      console.log(error);
    },
  });

  return logoutMutation;
};
