import { baseUrl, axiosInstance } from "./base";

  export const getPopularList = async() => {
    try{
        const res = await axiosInstance.get(`${baseUrl}/api/users/top?limit=10`) 
        const response = {
          status: res.data.status,
          data: res.data.data
        }
        return response
    } catch(error){
      const response = error.response
      const ErrorResponse = {
        status: response.status,
        message: response.message
      }
      console.log(ErrorResponse.status)
      console.error("Get popularList failed")
      return ErrorResponse
    }
  }

  