import axios from "axios";
import { baseUrl } from "./base";

/**
 * [使用者] 登入 API
 * @param {string} account - 帳號
 * @param {string} password - 密碼
 * @returns 
 */
export const userLogin = async ({ account, password}) => {
  try {
    const response = await axios.post(`${baseUrl}/api/users/signin`,{
      account,
      password
    })
    return response.data

  } catch (error) {
    return error.response.data
  }
}

/**
 * [使用者] 註冊 API
 * @param {string} name - 名稱
 * @param {string} account - 帳號
 * @param {string} email - email
 * @param {string} password - 密碼
 * @param {string} checkPassword - 再次確認密碼
 * @returns 
 */
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

/**
 * [管理者] 登入 API
 * @param {string} account - 帳號
 * @param {string} password - 密碼
 * @returns 
 */
export const adminLogin = async ({ account, password}) => {
  try {
    const response = await axios.post(`${baseUrl}/api/admin/signin`,{
      account,
      password
    })
    return response.data

  } catch (error) {
    return error.response.data
  }
}