import { baseUrl, axiosInstance } from "./base";

export const addFollowing = async (id) => {
    try{
        const res = await axiosInstance.post(`${baseUrl}/api/followships/`, {
            id: id
        })
        const response = {
            status: res.status,
            data: res.data
        }
        return response
    }catch(error){
        console.error(error)
    }
}

export const cancelFollowing = async (id) => {
    try{
        const res = await axiosInstance.delete(`/api/followships/${id}`)
        const response = {
            status: res.status,
            data: res.data
        }
        return response
    }catch(error){
        console.error(error)
    }
}

