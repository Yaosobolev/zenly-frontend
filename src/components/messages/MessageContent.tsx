import { Message } from "@/types/message";
import { MessageItem } from "../";

type MessageContentProps = {
  data: Message[];
  isLoading?: boolean;
  receiverId: number;
};

export const MessageContent: React.FC<MessageContentProps> = ({
  data,
  isLoading,
  receiverId,
}) => {
  if (isLoading) return <div className="text-red text-6xl">Loading...</div>;

  return (
    <div className="flex flex-col justify-end px-3 space-y-3 h-full overflow-auto scroll-my-2 pb-4 mb-auto w-full">
      {data && data.length > 0 ? (
        data!.map((message, index) => {
          return (
            <div className="px-3 text-black" key={index}>
              <MessageItem message={message} receiverId={receiverId} />
            </div>
          );
        })
      ) : (
        <span>Здесь пока ничего нет...</span>
      )}
    </div>
  );
};
