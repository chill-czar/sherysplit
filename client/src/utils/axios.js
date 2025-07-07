// utils/axios.js
import axios from "axios";

// create the axios instance
const axiosInstance = axios.create({
  baseURL: "http://localhost:3000", // change to your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

// export the instance
export default axiosInstance;


