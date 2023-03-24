import axios from "axios";
import { baseUrl } from "./base";

export const login = async ({ email, password }) => {
  try {
    const res = await axios.post(`${baseUrl}/api/users/signin`,{
      email,
      password
    })
    return res

  } catch (error) {
    console.error('[Login failed]:', error)
  }
}