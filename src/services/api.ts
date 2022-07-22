import axios from "axios";

const api = axios.create({
  baseURL:
    process.env.APP_URL || process.env.BASE_URL || "http://localhost:3000/api",
});

export default api;
