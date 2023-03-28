import axios from "axios";
import { baseUrl } from "./base";

const axiosInstance = axios.create({
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

  export const getPopularList = async() => {
    try{
        const res = await axiosInstance.get(`${baseUrl}/api/users/top?limit=10`) 
        return res.data.data
    } catch(error){
      console.error("Get popularList failed")
    }
  }