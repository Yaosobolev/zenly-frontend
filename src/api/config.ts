import axios from "axios";
import { io } from "socket.io-client";

const API_URL = import.meta.env.VITE_BASE_URL;

const instance = axios.create({
  baseURL: `${API_URL}/api`,
  withCredentials: true,
});

export default instance;

export const socket = io("http://localhost:3000");
