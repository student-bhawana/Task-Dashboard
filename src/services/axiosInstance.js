import axios from "axios";
import { axiosError } from "./axiosError";

const axiosInstance = axios.create({
  baseURL: `http://52.168.1.54:8080/api/v1`,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("access_token");

  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (res) => res,
  (err) => axiosError(err)
);

export { axiosInstance };
