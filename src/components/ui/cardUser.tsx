import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { Button } from "./button";
import { IconType } from "react-icons/lib";
import useSidebarStore from "@/store/sidebarStore";
import { useWindowWidth } from "@react-hook/window-size";
import {
  useAcceptFriendRequest,
  useRejectFriendRequest,
} from "@/api/hooks/useFriendship";
import { friendshipRequest } from "@/types/friendship";

type CardUserProps = {
  avatar: IconType;
  // name: string;
  data: friendshipRequest;

  onRequest: (id: number) => void;
};

type MutateFunction = {
  mutate: (id: number) => void;
};

const CardUser: React.FC<CardUserProps> = ({
  avatar: Avatar,
  data,
  onRequest,
}) => {
  const { isCollapsed } = useSidebarStore();

  const onlyWidth = useWindowWidth();
  const mobileWidth: boolean = onlyWidth < 768;

  const acceptFriendRequestMutation = useAcceptFriendRequest();
  const rejectFriendRequestMutation = useRejectFriendRequest();
  console.log(data.id);

  const onSubmit = (func: MutateFunction) => () => {
    onRequest(data.id);
    func.mutate(data.id);
  };

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
          {data.sender.username}
        </span>
      </div>
      <div
        className={
          isCollapsed || mobileWidth
            ? "absolute right-[800px] opacity-0"
            : " flex gap-2  "
        }
      >
        <Button
          onClick={onSubmit(rejectFriendRequestMutation)}
          className="p-2 bg-white-900 size-7 border rounded-full text-blue-500 hover:bg-gray-50"
        >
          <FaTimes />
        </Button>
        <Button
          onClick={onSubmit(acceptFriendRequestMutation)}
          className="p-2 bg-blue-500 size-7 rounded-full hover:bg-blue-600 "
        >
          <FaCheck />
        </Button>
      </div>
    </div>
  );
};

export default CardUser;
