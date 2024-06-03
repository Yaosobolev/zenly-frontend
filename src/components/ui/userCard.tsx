import { useWindowWidth } from "@react-hook/window-size";

import { FaCheck } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { IconType } from "react-icons/lib";

import {
  useAcceptFriendRequest,
  useRejectFriendRequest,
} from "@/api/hooks/useFriendship";
import useSidebarStore from "@/store/sidebarStore";
import { useFriendStore } from "@/store/friendshipStore";
import { friendshipRequest } from "@/types/friendship";

import { Button } from "../";
import clsx from "clsx";

type CardUserProps = {
  avatar: IconType;
  data: friendshipRequest;
  isFriends?: boolean;
  isMessages?: boolean;
};

type MutateFunction = {
  mutate: (id: number) => void;
};

export const UserCard: React.FC<CardUserProps> = ({
  avatar: Avatar,
  data,
  isFriends,
  isMessages,
}) => {
  const { isCollapsed } = useSidebarStore();
  const { removeRequest, removeFriend, setSelectedFriend, selectedFriend } =
    useFriendStore();

  const onlyWidth = useWindowWidth();
  const mobileWidth: boolean = onlyWidth < 768;

  const acceptFriendRequestMutation = useAcceptFriendRequest();
  const rejectFriendRequestMutation = useRejectFriendRequest();

  const onSubmit =
    (func: MutateFunction, shouldRemoveFriend: boolean = true) =>
    () => {
      if (shouldRemoveFriend) {
        removeFriend(data.id);
      }
      removeRequest(data.id);
      func.mutate(data.id);
    };

  const isSelected = selectedFriend?.id === data.id;

  return (
    <div
      onClick={() => setSelectedFriend(data)}
      className={clsx(
        "flex items-center justify-between w-full px-3 py-3 cursor-pointer rounded-sm transition-all",
        {
          "bg-[#5AB2FF]": isMessages && isSelected,
          "bg-slate-500/10 hover:opacity-60":
            isFriends || (isMessages && !isSelected),
        }
      )}
    >
      <div className="flex items-center gap-2">
        <Avatar className="size-8  min-w-8 " />
        <span
          className={
            (isCollapsed || mobileWidth) && !isFriends && !isMessages
              ? "absolute right-48 opacity-0"
              : "text-black text-sm font-bold  transition-all delay-500"
          }
        >
          {data.sender?.username || data.receiver?.username}
        </span>
      </div>
      <div
        className={
          (isCollapsed || mobileWidth) && !isFriends && !isMessages
            ? "absolute right-[800px] opacity-0"
            : " flex gap-2  "
        }
      >
        {!isMessages && (
          <Button
            onClick={onSubmit(rejectFriendRequestMutation)}
            className="p-2  size-7 border rounded-full transition-all duration-500  shadow-xl bg-white text-[#5AB2FF] hover:bg-white hover:opacity-60"
          >
            <FaTimes />
          </Button>
        )}
        {!isFriends && !isMessages && (
          <Button
            onClick={onSubmit(acceptFriendRequestMutation, false)}
            className="p-2 bg-[#5AB2FF] size-7 rounded-full  transition-all shadow-xl duration-500 opacity-100  hover:bg-[#5AB2FF] hover:opacity-60"
          >
            <FaCheck />
          </Button>
        )}
      </div>
    </div>
  );
};
