import axios from "axios";

const customFetch = axios.create({
  baseURL: "http://localhost:5100/api",
  // headers: { "Access-Control-Allow-Origin": "http://localhost:5100" },
});

export default customFetch;
