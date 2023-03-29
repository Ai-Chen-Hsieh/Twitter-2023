import { axiosInstance, baseUrl } from "./base"

export const getUsers = async () => {
  try {
    const response = await axiosInstance.get(`${baseUrl}/api/admin/users`);
    const data = {
      status: response.status,
      data: response.data
    }

    console.log(response)
    return data

  } catch (error) {
    const response = error.response
    const data = {
      status: response.status,
      data: response.data
    }

    console.error('[Get users failed] :', data)
    return data
  }
}