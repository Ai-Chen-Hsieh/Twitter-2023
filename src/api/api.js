import axios from "axios";
import { baseUrl } from "./base";

export const axiosInstance = axios.create({
    baseURL: baseUrl,
  });
  
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      console.error(error);
    },
  );