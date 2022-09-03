import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_APP_LOCAL_API,
});

export default instance;
