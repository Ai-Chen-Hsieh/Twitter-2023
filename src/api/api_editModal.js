import { baseUrl, axiosInstance } from "./base";

export const editUserProfile = async (id, formData) => {
    try {
      console.log(id, formData)
        const res = await axiosInstance.put(`${baseUrl}/api/users/${id}`, formData, { 
            headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        console.log(res)
        return res
      }catch(error){
        console.error(error)
    }
}


