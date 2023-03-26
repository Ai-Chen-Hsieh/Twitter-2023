import { createContext, useContext, useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { login, register } from "api/auth"
import jwt_decode from "jwt-decode";

const defaultAuthContext = {
  hasToken: false, // 是否有 token
  currentRegistrant: null, // 登入者資訊 
  login: null, // 登入
  register: null, // 註冊
  logout: null // 登出
}
const AuthContext = createContext(defaultAuthContext)

/**
 * 取得認證相關的邏輯 (AuthContext)
 * @returns 
 */
export const useAuth = () => useContext(AuthContext)

/**
 * 提供認證相關的邏輯 
 * @param {jsx} children - 放所有要透過 useAuth 取得認證相關的邏輯 (AuthContext) 的 Component
 * @returns 
 */
export const AuthProvider = ({ children }) => {
  const [hasToken, setHasToken] = useState(false)
  const [payload, setPayload] = useState(null) // token 解析後 payload 帶的資訊
  const { pathname } = useLocation()

  console.log('AuthProvider')

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      setHasToken(false)
      setPayload(null)
      return

    } else {
      const tempPayload = jwt_decode(token)
      setHasToken(true)
      setPayload(tempPayload)
    }

  }, [pathname])

  return (
    <AuthContext.Provider
      value={{
        // 是否有 token
        hasToken,
        // 登入者資訊 
        currentRegistrant: payload && {
          ...payload
        },
        // 登入
        login: async (data) => {
          const response = await login({
            account: data.account,
            password: data.password,
            role: data.role
          })

          const isLogin = (response.status === 'success') ? true : false
          if (isLogin) {
            const token = response.data.token
            const tempPayload = jwt_decode(token)

            setPayload(tempPayload)
            setHasToken(true)
            localStorage.setItem('token', token)

          } else {
            setPayload(null)
            setHasToken(false)
            localStorage.removeItem('token')
          }

          return response;
        },
        // 註冊
        register: async (data) => {
          const response = await register({
            name: data.name,
            account: data.account,
            email: data.email,
            password: data.password,
            checkPassword: data.checkPassword
          })

          return response
        },
        // 登出
        logout: () => {
          localStorage.removeItem('token')
          setPayload(null)
          setHasToken(false)
        }
      }}
    >
      { children }
    </AuthContext.Provider>
  )
} 