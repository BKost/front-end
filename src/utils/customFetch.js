import axios from "axios";

const customFetch = axios.create({
  baseURL: "/api",
  // withCredentials: true,
  // headers: { "Access-Control-Allow-Origin": "http://localhost:5100" },
});

export default customFetch;
