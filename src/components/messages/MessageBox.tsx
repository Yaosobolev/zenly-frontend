import { useFriendStore } from "@/store/friendshipStore";
import { MessageHeader } from "../";

export const MessageBox: React.FC = () => {
  const selectedFriend = useFriendStore((state) => state.selectedFriend);
  return (
    <div className="flex flex-col justify-between w-full ">
      {" "}
      {selectedFriend ? (
        <>
          <MessageHeader selectedFriend={selectedFriend} />

          <div>Content</div>
          <div>Input</div>
        </>
      ) : (
        <>
          <span>Выбери, кому хотели бы написать</span>
        </>
        // <div className="w-full ">
        // </div>
      )}
    </div>
  );
};
