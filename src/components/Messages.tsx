import { AnimatePresence, motion } from "framer-motion";
import { AddToFriendsInput } from "./ui/addToFriendsInput";
import UserList from "./ui/userList";
import { Button } from "./ui/button";
// import { FaRedoAlt } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import SearchInput from "./ui/searchInput";
import { useState } from "react";

export type MessagesProps = {
  handleClose: () => void;
};

const Messages: React.FC<MessagesProps> = ({ handleClose }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const clearSearch = () => {
    setSearchValue("");
  };

  // const filteredData = data.filter((item) =>
  //   item.toLowerCase().includes(searchValue.toLowerCase())
  // );

  const isMessages = true;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: -300, opacity: 0 }}
        className="h-screen w-[900px] -z-10 bg-slate-100/70 backdrop-blur-sm px-2"
      >
        <motion.div
          whileHover={{ rotate: -90 }}
          className="absolute right-[-20px] top-7 z-20"
          onClick={handleClose}
        >
          <Button
            //   onClick={toggleSidebar}
            variant="secondary"
            className="h-auto p-4 rounded-full transition-all bg-white hover:bg-white"
          >
            <FaPlus className="rotate-45" />
          </Button>
        </motion.div>
        <div className="flex">
          <div className="w-[250px] h-screen border-r-2">
            <div className="pt-[70px]">
              <SearchInput
                onSearchChange={handleSearchChange}
                clearSearch={clearSearch}
                searchValue={searchValue}
              />
              <UserList isMessages={isMessages} searchValue={searchValue} />
            </div>
          </div>
          <div></div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Messages;
