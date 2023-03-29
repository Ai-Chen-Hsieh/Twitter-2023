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

/**
 * [後台] 取得推文清單
 * @returns 
 */
export const getAdminTweets = async () => {
  try {
    const response = await axiosInstance.get(`${baseUrl}/api/admin/tweets`);
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

    console.error('[Get tweets failed] :', data)
    return data
  }
}