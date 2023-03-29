import axios from "axios";
export const baseUrl = "https://safe-cliffs-81319.herokuapp.com"

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
