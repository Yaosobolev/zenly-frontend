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
    <div className=" overflow-auto h-full h-inherit px-3 pb-4">
      <ScrollableFeed className="space-y-3 flex-grow h-inheri flex flex-col h-i">
        {data && data.length > 0 ? (
          data!.map((message, index) => {
            return (
              <div className="px-3 text-black mt-auto " key={index}>
                <MessageItem message={message} receiverId={receiverId} />
              </div>
            );
          })
        ) : (
          <div className="h-full flex items-center justify-center ">
            <span className="w-fit border rounded-full px-2 bg-slate-300">
              Здесь пока ничего нет...
            </span>
          </div>
        )}
      </ScrollableFeed>
    </div>
  );
};
