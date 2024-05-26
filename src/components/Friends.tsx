import { motion, AnimatePresence } from "framer-motion";
import { FaPlus } from "react-icons/fa";

import { UserList, Button, AddToFriendsInput } from "./";

export type FriendsProps = {
  handleClose: () => void;
};

export const Friends: React.FC<FriendsProps> = ({ handleClose }) => {
  const isFriends = true;
  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
        className="h-screen w-[250px] -z-10 bg-slate-100/70 backdrop-blur-sm "
      >
        <motion.div
          whileHover={{ rotate: -90 }}
          className="absolute right-[-20px] top-7 z-20"
          onClick={handleClose}
        >
          <Button
            variant="secondary"
            className="h-auto p-4 rounded-full transition-all bg-white hover:bg-white"
          >
            <FaPlus className="rotate-45" />
          </Button>
        </motion.div>
        <div className="flex">
          <div className="w-[250px] h-screen  border-r-2">
            <div className="pt-[70px] px-2">
              <AddToFriendsInput />
              <UserList isFriends={isFriends} />
            </div>
          </div>
          <div></div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
