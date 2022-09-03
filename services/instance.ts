import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_APP_API,
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json",
  },
});

export default instance;
