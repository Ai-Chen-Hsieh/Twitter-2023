import axios from "axios";
import { baseUrl } from "./base";

export const login = async ({ account, password, role }) => {
  try {
    const response = await axios.post(`${baseUrl}/api/users/signin`,{
      account,
      password,
      role
    })
    return response.data

  } catch (error) {
    return error.response.data
  }
}