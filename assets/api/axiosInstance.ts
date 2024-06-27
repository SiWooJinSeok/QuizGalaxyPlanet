import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://192.168.101.41:3000",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(async (config) => {
  return config;
});

axiosInstance.interceptors.response.use(async (response) => {
  return response;
});
