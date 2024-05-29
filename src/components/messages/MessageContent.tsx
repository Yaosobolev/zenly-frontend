import { Message } from "@/types/message";
import { MessageItem } from "../";
import ScrollableFeed from "react-scrollable-feed";

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
    <div className=" overflow-auto h-full px-3 pb-4">
      <ScrollableFeed className="space-y-3 flex-grow flex flex-col ">
        {data && data.length > 0 ? (
          data!.map((message, index) => {
            return (
              <div className="px-3 text-black mt-auto " key={index}>
                <MessageItem message={message} receiverId={receiverId} />
              </div>
            );
          })
        ) : (
          <span>Здесь пока ничего нет...</span>
        )}
      </ScrollableFeed>
    </div>
  );
};
