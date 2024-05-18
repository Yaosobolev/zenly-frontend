import { useState } from "react";
import { Button } from "./button";
import { useSendRequestToFriend } from "@/api/hooks/useFriendship";
import io from "socket.io-client";
import { useEffect } from "react";

const socket = io("http://localhost:3000");
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
    // Здесь можно выполнить действия с сохраненными значениями input1 и input2
  };

  useEffect(() => {
    socket.on("friend-request", (data) => {
      setRes(data.text);
    });
  }, [socket]);

  //   useEffect(() => {
  //     // Создаем экземпляр сокета и подключаемся к серверу
  //     const socket = io("http://localhost:3000", {
  //       transports: ["websocket"], // указываем использовать WebSocket
  //     }); // Замените адресом вашего сервера и портом
  //     socket.emit("connection", { message: "Hello, server!" });

  //     // Определяем обработчик для получения сообщений от сервера
  //     socket.on("friendRequest", (data) => {
  //       console.log("Received new message from server:", data);
  //     });

  //     // Функция для очистки соединения при размонтировании компонента
  //     return () => {
  //       socket.disconnect();
  //     };
  //   }, []);

  //Room State
  // const [room, setRoom] = useState("");

  // Messages States
  // const [message, setMessage] = useState("");
  // const [messageReceived, setMessageReceived] = useState("");

  // // const joinRoom = () => {
  // //   if (room !== "") {
  // //     socket.emit("join_room", room);
  // //   }
  // // };

  // const sendMessage = () => {
  //   socket.emit("send_message", { message });
  // };

  // useEffect(() => {
  //   socket.on("receive_message", (data) => {
  //     setMessageReceived(data.message);
  //   });
  // }, [socket]);

  return (
    <form onClick={handleSubmit}>
      {/* <div>
      <input
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
      /> */}
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
