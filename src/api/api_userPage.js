import { baseUrl, axiosInstance } from "./base";

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
        const successResponse = res.response
        const data = {
            status: successResponse.status,
            message: successResponse.data.message
        }
        return res.data
    }catch(error){
        const errorResponse = error.response
        const data = {
            status: errorResponse.status,
            message: errorResponse.data.message
        }
        console.error('Get user reply list failed', data)
        console.log(errorResponse)
        return data
    }
}

