// api/axiosClient.js
import axios from "axios";
import queryString from "query-string";

// Set up default config for http requests here
const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "content-type": "application/json",
  },
});

export default axiosClient;
