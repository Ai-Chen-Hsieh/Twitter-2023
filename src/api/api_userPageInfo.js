import { baseUrl, axiosInstance } from "./base";

export const getUserInfo = async (id) => {
    try{
        const res = await axiosInstance.get(`${baseUrl}/api/users/${id}`)
        return res.data
    }catch(error){
        console.error('Get user info failed')
    }
}