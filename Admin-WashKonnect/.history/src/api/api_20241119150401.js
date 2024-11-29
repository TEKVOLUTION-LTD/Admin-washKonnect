import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", // Change this to match your backend URL
});

export default API;
