import axios from "axios";

const baseURL = "https://randomuser.me/api";
// const baseURL = import.meta.env.VITE_APP_API_URL;

const axiosClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default axiosClient;
