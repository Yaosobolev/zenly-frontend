import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { Button } from "./button";
import { IconType } from "react-icons/lib";
import useSidebarStore from "@/store/sidebarStore";
import { useWindowWidth } from "@react-hook/window-size";

type CardUserProps = {
  avatar: IconType;
  name: string;
};

const CardUser: React.FC<CardUserProps> = ({ avatar: Avatar, name }) => {
  const { isCollapsed } = useSidebarStore();

  const onlyWidth = useWindowWidth();
  const mobileWidth: boolean = onlyWidth < 768;

  return (
    <div className="flex items-center justify-between w-full px-3 py-3 cursor-pointer">
      <div className="flex items-center gap-2">
        <Avatar className="size-8  min-w-8 " />
        <span
          className={
            isCollapsed || mobileWidth
              ? "absolute right-48 opacity-0"
              : "text-xs font-normal transition-all delay-500"
          }
        >
          {name}
        </span>
      </div>
      <div
        className={
          isCollapsed || mobileWidth
            ? "absolute right-[800px] opacity-0"
            : " flex gap-2  "
        }
      >
        <Button className="p-2 bg-white-900 size-7 border rounded-full text-blue-500 hover:bg-gray-50">
          <FaTimes />
        </Button>
        <Button className="p-2 bg-blue-500 size-7 rounded-full hover:bg-blue-600 ">
          <FaCheck />
        </Button>
      </div>
    </div>
  );
};

export default CardUser;
