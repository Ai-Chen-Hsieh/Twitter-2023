import { axiosInstance, baseUrl, getData } from "./base"

/**
 * 取得特定使用者發過的推文
 * @param {number} userId - 使用者 ID
 * @returns 
 */
export const getUserLikes = async (userId) => {
  try {
    const response = await axiosInstance.get(`${baseUrl}/api/users/${userId}/likes`);
    const data = getData(response)
    return data

  } catch (error) {
    const response = error.response
    const data = getData(response)
    return data
  }
}