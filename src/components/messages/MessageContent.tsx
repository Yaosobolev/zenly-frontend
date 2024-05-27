import { useGetMessages } from "@/api/hooks/useMessage";
import { MessageItem } from "../";
import { friendshipRequest } from "@/types/friendship";
import { useParams } from "react-router-dom";

type MessageContentProps = {
  selectedFriend: friendshipRequest;
};

export const MessageContent: React.FC<MessageContentProps> = ({
  selectedFriend,
}) => {
  const test = new Array<string>(1).fill("");

  const Receiver = selectedFriend.receiver?.id || selectedFriend.sender?.id;
  const receiverId: number = Receiver ?? 0;
  const { userId } = useParams<{ userId: string }>();
  const userIdNumber: number = Number(userId);

  const messageData = {
    senderId: userIdNumber,
    receiverId: receiverId,
  };

  const { data } = useGetMessages(messageData);
  console.log(data);
  return (
    <div className="flex flex-col-reverse px-3 space-y-3 h-full overflow-auto scroll-my-2 pb-4 mb-auto w-full">
      {test.map(() => {
        return (
          <div className="px-3 text-black" key={Math.random()}>
            <MessageItem />
          </div>
        );
      })}
    </div>
  );
};
