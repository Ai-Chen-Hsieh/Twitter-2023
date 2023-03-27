import axios from "axios";
import { baseUrl } from "./base";

export const login = async ({ account, password, role }) => {
  try {
    const response = await axios.post(`${baseUrl}/api/signin`,{
      account,
      password,
      role
    })
    return response.data

  } catch (error) {
    return error.response.data
  }
}

export const register = async ({ name, account, email, password, checkPassword }) => {
  try {
    const response = await axios.post(`${baseUrl}/api/users`,{
      name,
      account,
      email,
      password,
      checkPassword
    })
    return response.data

  } catch (error) {
    return error.response.data
  }
}