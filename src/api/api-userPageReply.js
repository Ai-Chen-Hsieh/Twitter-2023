import { baseUrl, axiosInstance } from "./base";

export const getUserReply = async (id) => {
    try{
        const res = await axiosInstance.get(`${baseUrl}/api/users/${id}/replied_tweets`)
        const successResponse = {
            status: res.status,
            data: res.data
        }
        return successResponse
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
