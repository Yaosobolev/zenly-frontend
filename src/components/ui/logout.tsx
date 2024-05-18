import { useLogout } from "@/api/hooks/useAuth";
import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();
  const logoutMutation = useLogout();

  const logout = () => {
    logoutMutation.mutate();
    navigate("/login");
  };

  return (
    <div
      onClick={logout}
      className="flex justify-center items-center cursor-pointer h-fit opacity-50 transition-all hover:opacity-100"
    >
      <MdLogout className="size-6 opacity-50 font-black " />
      <span>Выход</span>
    </div>
  );
};

export default Logout;
