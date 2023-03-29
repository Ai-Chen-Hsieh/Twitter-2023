import { axiosInstance, baseUrl, getData } from "./base"

/**
 * [後台] 取得使用者清單
 * @returns 
 */
export const getUsers = async () => {
  try {
    const response = await axiosInstance.get(`${baseUrl}/api/admin/users`);
    const data = getData(response)
    return data

  } catch (error) {
    const response = error.response
    const data = getData(response)
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
    const data = getData(response)
    return data

  } catch (error) {
    const response = error.response
    const data = getData(response)
    return data
  }
}

export const deleteAdminTweet = async (tweedId) => {
  try {
    const response = await axiosInstance.delete(`${baseUrl}/api/admin/tweets/${tweedId}`);
    const data = getData(response)
    return data

  } catch (error) {
    const response = error.response
    const data = getData(response)
    return data
  }
}