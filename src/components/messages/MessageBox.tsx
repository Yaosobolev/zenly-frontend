import { useFriendStore } from "@/store/friendshipStore";
import { MessageHeader, MessageInput, MessageContent } from "../";

export const MessageBox: React.FC = () => {
  const selectedFriend = useFriendStore((state) => state.selectedFriend);
  return (
    <div className="flex flex-col justify-between w-full border-l-2">
      {selectedFriend ? (
        <>
          <MessageHeader selectedFriend={selectedFriend} />
          <MessageContent />
          <MessageInput />
        </>
      ) : (
        <>
          <span>Выбери, кому хотели бы написать</span>
        </>
      )}
    </div>
  );
};
