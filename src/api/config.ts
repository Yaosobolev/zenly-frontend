import axios from "axios";
const API_URL = import.meta.env.VITE_BASE_URL;

const instance = axios.create({
  baseURL: `${API_URL}/api`,
  withCredentials: true,
});

export default instance;
