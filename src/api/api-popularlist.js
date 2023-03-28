import axios from "axios";
import { baseUrl } from "./base";

const axiosInstance = axios.create({
    baseURL: baseUrl,
  });
  
  axiosInstance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers['Authorization'] = `Bear ${token}`;
      }
      return config;
    },
    (error) => {
      console.error(error);
    },
  );

  const getPopularList = async() => {
    try{
        const res = await axiosInstance.get(`${baseUrl}/users/`) 
    } catch{

    }
  }