import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
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
