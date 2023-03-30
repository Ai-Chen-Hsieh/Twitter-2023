import { axiosInstance, baseUrl, getData } from "./base"

/**
 * [前台] 所有推文，包括推文作者
 * @returns 
 */
export const getTweets = async () => {
  try {
    const response = await axiosInstance.get(`${baseUrl}/api/tweets`);
    const data = getData(response)
    return data

  } catch (error) {
    const response = error.response
    const data = getData(response)
    return data
  }
}

/**
 * [前台] 收藏推文
 * @returns 
 */
export const likeTweet = async (tweetId) => {
  try {
    const response = await axiosInstance.post(`${baseUrl}/api/tweets/${tweetId}/like`);
    const data = getData(response)
    return data

  } catch (error) {
    const response = error.response
    const data = getData(response)
    return data
  }
}

/**
 * [前台] 取消收藏推文
 * @returns 
 */
export const unlikeTweet = async (tweetId) => {
  try {
    const response = await axiosInstance.post(`${baseUrl}/api/tweets/${tweetId}/unlike`);
    const data = getData(response)
    return data

  } catch (error) {
    const response = error.response
    const data = getData(response)
    return data
  }
}

/**
 * [前台] 回覆推文
 * @returns 
 */
export const replyTweet = async (payload) => {
  try {
    const { tweetId, comment } = payload
    const response = await axiosInstance.post(`${baseUrl}/api/tweets/${tweetId}/replies`, {
      comment
    });
    const data = getData(response)
    return data

  } catch (error) {
    const response = error.response
    const data = getData(response)
    return data
  }
}