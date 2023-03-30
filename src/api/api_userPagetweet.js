import { baseUrl, axiosInstance } from "./base";

export const getUserPageTweet = async (id) => {
    try{
        const res = await axiosInstance.get(`${baseUrl}/api/tweets/${id}`)
        const response = {
            status: res.status,
            data: res.data
        }
        return response
    }catch(error){
        const errorResponse = {
            status: error.status,
            data: error.data
        }
        console.error(error)
        return errorResponse
    }
}

export const getUserTweetReply = async (id) => {
    try{
        const res = await axiosInstance.get(`${baseUrl}/api/tweets/${id}/replies`)
        const response = {
            status: res.status,
            data: res.data
        }
        return response
    }catch(error){
        console.error(error)
    }
}
