import { PiUserCircleFill } from "react-icons/pi";
import { ShareButton } from "./shareButton";
import useAuthStore from "@/store/authStore";
import { motion } from "framer-motion";

type ProfileCardProps = {
  isCollapsed: boolean;
};

export const ProfileCard: React.FC<ProfileCardProps> = ({ isCollapsed }) => {
  console.log("isCollapsed: ", isCollapsed);
  const { user } = useAuthStore();
  return (
    <div className="w-full px-3">
      {" "}
      <div className={`flex ${isCollapsed && "flex-col"} items-start gap-2`}>
        <div className="">
          <PiUserCircleFill className="size-11 min-w-8" />
        </div>
        <div className="flex flex-col">
          {!isCollapsed && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="font-medium"
            >
              {user?.username}
            </motion.span>
          )}

          <ShareButton link={user!.id} isCollapsed={isCollapsed} />
        </div>
      </div>
    </div>
  );
};
