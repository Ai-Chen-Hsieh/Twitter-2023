import { baseUrl } from "./base";
import { axiosInstance } from "./api";

export const getUserInfo = async (id) => {
    try{
        const res = await axiosInstance.get(`${baseUrl}/api/users/${id}`)
        return res.data
    }catch(error){
        console.error('Get user info failed')
    }
}

export const getUserReply = async (id) => {
    try{
        const res = await axiosInstance.get(`${baseUrl}/api/users/${id}/replied_tweets`)
        return res.data
    }catch(error){
        console.error('Get user reply list failed')
    }
}

export const getUserLikeList = async (id) =>{
    try{
        const res = await axiosInstance.get(`${baseUrl}/api/users/${id}/likes`)
        console.log(res.data, 'async')
    }catch(error){
        console.log(error)
    }
} 

