import axios from "axios"

export const baseUrl = "https://simple-twitter-x2y3.onrender.com"

export const getData = (response) => {
  // console.log(response)
  return {
    status: response.status,
    data: response.data
  }
}

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

axiosInstance.interceptors.request.use(
  (config) => {
    // 從 localStorage 將 token 取出
    const token = localStorage.getItem('token');

    // 如果 token 存在的話，則帶入到 headers 當中
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    console.error(error)
  },
);

export { axiosInstance }
