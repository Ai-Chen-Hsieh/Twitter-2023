import { baseUrl } from "./base";
import { axiosInstance } from "./api";

export const getUserInfo = async (id) => {
    try{
        const res = axiosInstance.get(`${baseUrl}/api/users/${id}`)
        console.log(res)
        return res.data
    }catch(error){
        console.error('Get user info failed')
    }
}