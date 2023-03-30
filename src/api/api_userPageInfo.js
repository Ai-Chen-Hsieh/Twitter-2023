import { baseUrl, axiosInstance } from "./base";

export const getUserInfo = async (id) => {
    try{
        const res = await axiosInstance.get(`${baseUrl}/api/users/${id}`)
        const response = {
            status: res.status,
            data: res.data
        }
        return response
    }catch(error){
        const errorResponse = {
            status: error.response.status,
            data: error.response.data
        }
        console.error('Get user info failed', error)
        return errorResponse
    }
}