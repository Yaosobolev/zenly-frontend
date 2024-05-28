import { Message } from "@/types/message";
import clsx from "clsx";

type MessageItemProps = {
  message: Message;
  receiverId: number;
};

export const MessageItem: React.FC<MessageItemProps> = ({
  message,
  receiverId,
}) => {
  const receiver = receiverId === message.senderId;

  receiverId;

  console.log(message);
  console.log(receiverId);
  return (
    <div
      className={clsx("relative px-3 py-4 rounded-2xl  w-fit max-w-[60%]", {
        "ml-auto bg-[#5AB2FF]": !receiver,
        "bg-white mr-auto": receiver,
      })}
    >
      <div className="flex flex-col">
        <span className="break-all ">{message.content}</span>
        <div className=" text-black text-xs self-end">
          {new Date().toLocaleString()}
        </div>
      </div>
    </div>
  );
};
