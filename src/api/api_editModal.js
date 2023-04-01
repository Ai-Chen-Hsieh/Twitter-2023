import { baseUrl, axiosInstance } from "./base";

export const editUserProfile = async (id, formData) => {
    try {
        const res = await axiosInstance.put(`${baseUrl}/api/users/${id}`, formData, { 
            headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        const response = {
          status: res.status,
          message: res.data.message
        }
        return response
      }catch(error){
        const errorResponse = {
          status: error.status,
          message: error.data.message
        }
        console.error(error)
        return errorResponse
    }
}


