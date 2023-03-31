import { baseUrl, axiosInstance } from "./base";

export const getFollower = async (id) => {
    try {
        const res = await axiosInstance.get(`${baseUrl}/api/users/${id}/followers`)
        const response = {
            status: res.status,
            data: res.data
        }
        console.log(response)
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

export const getFollowing = async (id) => {
    try{
        const res = await axiosInstance.get(`${baseUrl}/api/users/${id}/following`)
        const response = {
            status: res.status,
            data: res.data
        }
        console.log(response)
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
