import { useState } from "react";
import { Button } from "./button";
import { useSendRequestToFriend } from "@/api/hooks/useFriendship";

import { useParams } from "react-router-dom";
import { sendRequestToFriendData } from "@/types/friendship";

export const TestInputFriend = () => {
  const sendRequestToFriendMutation = useSendRequestToFriend();

  const { userId } = useParams();

  const [data, setData] = useState<sendRequestToFriendData>({
    receiverId: "",
    senderId: "",
  });
  // added socket to getRequests and post to accept/reject request
  // const [res, setRes] = useState<friendshipRequest>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
      receiverId: e.target.value,
      senderId: userId,
    });
  };
  const { receiverId } = data;

  const handleSubmit = (e: React.MouseEvent<HTMLInputElement>) => () => {
    e.preventDefault();
    sendRequestToFriendMutation.mutate(data);
  };

  // return () => {
  //   connectToSocket(Number(userId)).disconnect();
  //   console.log("disc");
  // };

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
