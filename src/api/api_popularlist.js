import { baseUrl, axiosInstance } from "./base";

  export const getPopularList = async() => {
    try{
        const res = await axiosInstance.get(`${baseUrl}/api/users/top?limit=10`) 
        return res.data.data
    } catch(error){
      console.error("Get popularList failed")
    }
  }

  