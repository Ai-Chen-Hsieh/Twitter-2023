import axios from "axios";
import { baseUrl } from "./base";

export const register = async ({ name, account, email, password, checkPassword }) => {
  try {
    const res = await axios.post(`${baseUrl}/api/users`,{
      name,
      account,
      email,
      password,
      checkPassword
    })
    return res

  } catch (error) {
    console.error('[Register failed]:', error)
  }
}
