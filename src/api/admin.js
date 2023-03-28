import { axiosInstance, baseUrl } from "./base"

export const getUsers = async () => {
  try {
    const response = await axiosInstance.get(`${baseUrl}/api/admin/users`);
    return response.data

  } catch (error) {
    return error.response.data
  }
}