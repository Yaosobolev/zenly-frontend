import { useFriendStore } from "@/store/friendshipStore";
import { MessageHeader, MessageInput, MessageContent } from "../";
import { useParams } from "react-router-dom";
import { useGetMessages } from "@/api/hooks/useMessage";
import { useMessageStore } from "@/store/messageStore";
import { useEffect } from "react";
import { connectToSocket } from "@/api/config";
import { Message } from "@/types/message";

export const MessageBox: React.FC = () => {
  const selectedFriend = useFriendStore((state) => state.selectedFriend);

  const Receiver = selectedFriend?.receiver?.id || selectedFriend?.sender?.id;
  const receiverId: number = Receiver ?? 0;
  const { userId } = useParams<{ userId: string }>();
  const userIdNumber: number = Number(userId);

  const messageData = {
    senderId: userIdNumber,
    receiverId: receiverId,
  };

  const messages = useMessageStore((state) => state.messages);
  const addMessage = useMessageStore((state) => state.addMessage);
  useGetMessages(messageData);

  const handleRequest = (data: { data: Message }) => {
    addMessage(data.data);
  };
  useEffect(() => {
    const socket = connectToSocket(Number(userId));

    socket.on("new-messages", handleRequest);

    return () => {
      socket.off("new-messages");
    };
  }, [connectToSocket, userId]);

  return (
    <div className="flex flex-col justify-between w-full border-l-2 h-screen">
      {selectedFriend ? (
        <>
          <MessageHeader selectedFriend={selectedFriend} />
          <MessageContent
            // isLoading={isLoading}
            data={messages!}
            receiverId={receiverId}
          />
          <MessageInput selectedFriend={selectedFriend} />
        </>
      ) : (
        <>
          <span>Выбери, кому хотели бы написать</span>
        </>
      )}
    </div>
  );
};
