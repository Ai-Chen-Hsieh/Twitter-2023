import { createContext, useContext, useState, useEffect } from "react"
import * as jwt from 'jsonwebtoken'
// import { useLocation } from "react-router-dom"
import { login } from "api/auth"

const defaultAuthContext = {
  hasToken: false, // 是否有 token
  isAdmin: false, // 是否為管理者
  currentRegistrant: null, // 登入者資訊 
  login: null, // 登入
}
const AuthContext = createContext(defaultAuthContext)

/**
 * 取得認證相關的邏輯 (AuthContext)
 * @returns 
 */
export const useAuth = () => { return useContext(AuthContext) }

/**
 * 提供認證相關的邏輯 
 * @param {jsx} children - 放所有要透過 useAuth 取得認證相關的邏輯 (AuthContext) 的 Component
 * @returns 
 */
export const AuthProvider = ({ children }) => {
  const [hasToken, setHasToken] = useState(false)
  const [payload, setPayload] = useState(null) // token 解析後的 payload
  const isAdmin = (payload.role === 'admin') ? true : false;
  // const { pathname } = useLocation() // 取得網址的路徑

  // // 當切換網址路徑時
  // useEffect(() => {
  //   const token = localStorage.getItem('token')

  //   if (!token) {
  //     setPayload(null)
  //     setHasToken(false)
  //     return
  //   }
  // }, [pathname])

  return (
    <AuthContext.Provider
      value={{
        // 是否有 token
        hasToken,
        // 是否為管理者
        isAdmin,
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
            const tempPayload = jwt.decode(token)

            setPayload(tempPayload)
            setHasToken(true)
            localStorage.setItem('token', token)

          } else {
            setPayload(null)
            setHasToken(false)
            localStorage.removeItem('token')
          }
        }
      }}
    >
      { children }
    </AuthContext.Provider>
  )
} 
