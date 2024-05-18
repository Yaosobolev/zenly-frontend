import { useState } from "react";
import { Button } from "./button";
import { useSendRequestToFriend } from "@/api/hooks/useFriendship";
import { useEffect } from "react";
import { socket } from "@/api/config";

// const socket = io("http://localhost:3000");

export const TestInputFriend = () => {
  const sendRequestToFriendMutation = useSendRequestToFriend();

  const [data, setData] = useState({
    senderId: "",
    receiverId: "",
  });
  const [res, setRes] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const { senderId, receiverId } = data;

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    sendRequestToFriendMutation.mutate(data);

    console.log(data);
  };

  useEffect(() => {
    socket.on("friend-requests", (data) => {
      setRes(data);
    });
  }, [socket]);

  console.log(res);
  console.log(socket);

  return (
    <form onClick={handleSubmit}>
      <div>
        {/* <input
        onChange={(event) => {
          setMessage(event.target.value);
        }}
        type="text"
      />
      <input
        onChange={(event) => {
          setRoom(event.target.value);
        }}
        type="text"
      />{" "} */}
      </div>
      <input
        name="senderId"
        value={senderId}
        onChange={handleChange}
        type="text"
      />
      <input
        name="receiverId"
        value={receiverId}
        onChange={handleChange}
        type="text"
      />
      <Button></Button>
      {/* <Button onClick={sendMessage}>Send Message</Button> */}
      <span className="text-3xl text-black">{res}</span>
    </form>
  );
};
