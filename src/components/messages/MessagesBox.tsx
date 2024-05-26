import { useFriendStore } from "@/store/friendshipStore";

export const MessagesBox: React.FC = () => {
  const selectedFriend = useFriendStore((state) => state.selectedFriend);
  return (
    <div className="flex flex-col justify-between">
      {" "}
      {selectedFriend ? (
        <>
          <div className="bg-white">
            Header Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Doloremque totam deleniti tempora consequatur veritatis maiores
            magnam omnis magni sit repudiandae voluptas, voluptatem blanditiis
            accusantium qui veniam voluptates, enim autem porro.
          </div>
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
