import { PiUserCircleFill } from "react-icons/pi";
import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { Button } from "./button";

const CardUser = () => {
  return (
    <div className="flex items-center justify-between w-full px-3 py-3 cursor-pointer ">
      <div className="flex  items-center gap-2">
        <PiUserCircleFill className="size-7" />
        <span className="text-xs font-normal">Max Jhon</span>
      </div>
      <div className="flex gap-2">
        <Button className="p-2 bg-green-900 size-7">
          <FaCheck />
        </Button>
        <Button className="p-2 bg-red-900 size-7">
          <FaTimes />
        </Button>
      </div>
    </div>
  );
};

export default CardUser;
