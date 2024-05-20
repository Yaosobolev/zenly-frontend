import axios from "axios";
import { io, Socket } from "socket.io-client";

const API_URL = import.meta.env.VITE_BASE_URL;

const instance = axios.create({
  baseURL: `${API_URL}/api`,
  withCredentials: true,
});

export default instance;

let socket: Socket | null = null;

export const connectToSocket = (id: number) => {
  if (!socket) {
    socket = io(`${API_URL}`, {
      query: {
        userId: id,
      },
    });

    socket.on("connect", () => {
      console.log("Подключение к сокету установлено");
    });
    socket.on("connection", (data) => {
      console.log(data);
    });

    socket.on("disconnect", () => {
      console.log("Соединение с сокетом разорвано");
      socket = null;
    });
  }
  return socket;
};
