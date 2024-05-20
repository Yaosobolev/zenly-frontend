import { useState } from "react";
import { Button } from "./button";
import { useSendRequestToFriend } from "@/api/hooks/useFriendship";
import { useEffect } from "react";
import { connectToSocket } from "@/api/config";
import { useParams } from "react-router-dom";
import { friendshipRequest, sendFriendshipRequest } from "@/types/friendship";

export const TestInputFriend = () => {
  const sendRequestToFriendMutation = useSendRequestToFriend();

  const { userId } = useParams();

  const [data, setData] = useState<sendFriendshipRequest>({
    receiverId: "",
    senderId: "",
  });
  // const [res, setRes] = useState<friendshipRequest>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      receiverId: e.target.value,
      senderId: userId,
    });
  };
  const { receiverId } = data;

  const handleSubmit = (e: React.ClickEvent<HTMLInputElement>) => {
    e.preventDefault();
    sendRequestToFriendMutation.mutate(data);
  };

  useEffect(() => {
    connectToSocket(Number(userId)).on("friend-requests", (data) => {
      // setRes(data);
    });

    // return () => {
    //   connectToSocket(Number(userId)).disconnect();
    //   console.log("disc");
    // };
  }, [connectToSocket]);

  // console.log(res);

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="receiverId"
        value={receiverId}
        onChange={handleChange}
        type="text"
      />
      <Button onClick={handleSubmit}></Button>
      {/* <Button onClick={sendMessage}>Send Message</Button> */}
      <span className="text-3xl text-black"></span>
    </form>
  );
};
