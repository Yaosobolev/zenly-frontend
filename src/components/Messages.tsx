import { AnimatePresence, motion } from "framer-motion";
import { FaPlus } from "react-icons/fa";
// import { FaRedoAlt } from "react-icons/fa";

import { SearchInput, UserList, Button } from "./";

export type MessagesProps = {
  handleClose: () => void;
};
// max-w-[800px]

export const Messages: React.FC<MessagesProps> = ({ handleClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
        className="h-screen  w-fit max-w-[900px] -z-10 bg-slate-100/70 backdrop-blur-sm "
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
          <div className="min-w-[250px] w-[250px] h-screen border-r-2">
            <div className="pt-[70px] px-2">
              <SearchInput />
              <UserList isMessages />
            </div>
          </div>
          <div className="flex flex-col justify-between w-full">
            <div className="bg-white">
              Header Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque totam deleniti tempora consequatur veritatis maiores
              magnam omnis magni sit repudiandae voluptas, voluptatem blanditiis
              accusantium qui veniam voluptates, enim autem porro.
            </div>
            <div>Content</div>
            <div>Input</div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
