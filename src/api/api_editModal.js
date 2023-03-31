import { baseUrl, axiosInstance } from "./base";

export const editUserProfile = async (id, formData) => {
    try {
        const res = await axiosInstance.fetch(`${baseUrl}/api/users/${id}/account`, { 
            method: 'PUT',
            headers: {
            'Content-Type': 'multipart/form-data'
          },
          body: formData
        })
        console.log(res)
        return res
      }catch(error){
        console.error(error)
    }
}


