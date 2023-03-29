import { axiosInstance, baseUrl, getData } from "./base"

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