import { useMutation } from "@tanstack/react-query";
import useAuthStore from "../store/authStore";
import { authService } from "@/services/authService";
import { User } from "@/types";
import { AxiosResponse } from "axios";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const setUser = useAuthStore((state) => state.setUser);
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: authService.login,
    onSuccess: (res: AxiosResponse<User>) => {
      setUser(res.data);
      navigate("/");
    },
    onError: (error: Error) => {
      console.log(error);
    },
  });

  return loginMutation;
};

// export const useRegister = () => {
//   const setUser = useAuthStore((state) => state.setUser);
//   return useMutation(
//     (registerData) => axios.post("/api/register", registerData),
//     {
//       onSuccess: (data) => {
//         setUser(data.user);
//       },
//     }
//   );
// };
