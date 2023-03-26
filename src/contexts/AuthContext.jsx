import { createContext, useContext, useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { login } from "api/auth"
// import * as jwt from "jsonwebtoken"

const defaultAuthContext = {
  hasToken: false, // 是否有 token
  currentRegistrant: null, // 登入者資訊 
  login: null, // 登入
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
  const [currentRegistrant, setCurrentRegistrant] = useState(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      setHasToken(false)
      setCurrentRegistrant(null)
      return
    }

  }, [pathname])

  return (
    <AuthContext.Provider
      value={{
        // 是否有 token
        hasToken,
        // 登入者資訊 
        currentRegistrant: currentRegistrant && {
          ...currentRegistrant
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
            setCurrentRegistrant(response.data.user)
            setHasToken(true)
            localStorage.setItem('token', response.data.token)

          } else {
            setCurrentRegistrant(null)
            setHasToken(false)
            localStorage.removeItem('token')
          }

          return response;
        }
      }}
    >
      { children }
    </AuthContext.Provider>
  )
} 