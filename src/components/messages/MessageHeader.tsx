import { PiUserCircleFill } from "react-icons/pi";

import { friendshipRequest } from "@/types/friendship";

type MessageHeaderProps = {
  selectedFriend: friendshipRequest;
};

export const MessageHeader: React.FC<MessageHeaderProps> = ({
  selectedFriend,
}) => {
  return (
    <div className=" border-b-2 pt-8 pb-1 flex items-center gap-x-2">
      <div>
        <PiUserCircleFill className="size-16 min-w-8 " />
      </div>
      <span className="text-black text-2xl">
        {selectedFriend.sender?.username || selectedFriend.receiver?.username}
      </span>
    </div>
  );
};
