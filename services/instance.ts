import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_APP_API,
});

export default instance;
