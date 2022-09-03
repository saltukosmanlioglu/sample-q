import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_APP_API,
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YTlmYTk3ZTIzYjI4OWY5YWVmOTAyZTkzMjVlMGNhNyIsInN1YiI6IjYzMTM3NzRlYzA0OGE5MDA4ZmU5OGRkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.degk8vtXUfqr8cxyWKpqfJtORN7OlDLUyBDl8lSgtXk`,
    "Content-Type": "application/json",
  },
});

export default instance;
