import { useNavigate } from "react-router-dom";
import { MdLogout } from "react-icons/md";

import { useLogout } from "@/api/hooks/useAuth";

export const Logout = () => {
  const navigate = useNavigate();
  const logoutMutation = useLogout();

  const logout = () => {
    logoutMutation.mutate();
    navigate("/login");
  };

  return (
    <div
      onClick={logout}
      className="flex justify-start items-center cursor-pointer h-fit opacity-50 transition-all hover:opacity-100 px-4 mt-2"
    >
      <MdLogout className="size-6 opacity-50 font-black " />
      <span>Выход</span>
    </div>
  );
};
