import axios from "axios";
const BASE_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:3000/api/v1"
    : "/api/v1";

export default axios.create({
  baseURL: BASE_URL,
});
