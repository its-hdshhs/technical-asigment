import axios from "axios";

const api = axios.create({
  baseURL: "https://technical-asigment.onrender.com/api",
  withCredentials: true, 
 })

export default api;
