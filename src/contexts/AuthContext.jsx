import { createContext, useContext, useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { userLogin, adminLogin, register } from "api/auth"
import jwt_decode from "jwt-decode";
import Swal from "sweetalert2";

const defaultAuthContext = {
  hasToken: false, // 是否有 token
  currentRegistrant: null, // 登入者資訊 
  userLogin: null, // [使用者] 登入
  adminLogin: null, // [管理者] 登入
  register: null, // [使用者] 註冊
  logout: null, // 登出
  prevPath: null // 上一頁路徑
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
  const [hasToken, setHasToken] = useState(false) // 是否有 token
  const [payload, setPayload] = useState(null) // token 解析後 payload 帶的資訊
  const [prevPath, setPrevPath] = useState('/main') // 上一頁路徑
  const [logoutAlertMsg, setLogoutAlertMsg] = useState('')
  const { pathname } = useLocation()

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (!token) {
      setHasToken(false)
      setPayload(null)

    } else {
      const tempPayload = jwt_decode(token)
      setHasToken(true)
      setPayload(tempPayload)
      
      // 紀錄上一頁路徑
      const landingPaths = ['/admin', '/login', '/register', '/']
      if (!(landingPaths.includes(pathname))) {
        const adminPaths = ['/admin_main', '/admin_users']
        let prevPath = ''
        if (tempPayload.role === 'admin') {
          prevPath = adminPaths.includes(pathname) ? pathname : '/admin_main'
        } else {
          prevPath = !(adminPaths.includes(pathname)) ? pathname : '/main'
        }
        setPrevPath(prevPath)
      }
    }

  }, [pathname])

  // 當取得推文清單，API 回傳 status 是 401, 403 則登出
  useEffect(() => {
    if (logoutAlertMsg.length > 0) {
      Swal.fire({
        title: '請重新登入!',
        icon: 'info',
        html: `<p>${logoutAlertMsg}</p>`,
        showConfirmButton: false,
        timer: 3000,
        position: 'top',
      });
    }
  }, [logoutAlertMsg])

  return (
    <AuthContext.Provider
      value={{
        // 是否有 token
        hasToken,
        // 登入者資訊 
        currentRegistrant: payload && {
          ...payload
        },
        // [使用者] 登入
        userLogin: async (data) => {
          const response = await userLogin({
            account: data.account,
            password: data.password
          })

          const isLogin = (response.status === 'success') ? true : false
          if (isLogin) {
            const token = response.data.token
            const tempPayload = jwt_decode(token)

            setPayload(tempPayload)
            setHasToken(true)
            setPrevPath('/main')
            localStorage.setItem('token', token)

          } else {
            setPayload(null)
            setHasToken(false)
            localStorage.removeItem('token')
          }
     
          console.log('[user login] :', response)
          return response
        },
        // [管理者] 登入
        adminLogin: async (data) => {
          const response = await adminLogin({
            account: data.account,
            password: data.password
          })

          const isLogin = (response.status === 'success') ? true : false
          if (isLogin) {
            const token = response.data.token
            const tempPayload = jwt_decode(token)

            setPayload(tempPayload)
            setHasToken(true)
            setPrevPath('/admin_main')
            localStorage.setItem('token', token)

          } else {
            setPayload(null)
            setHasToken(false)
            localStorage.removeItem('token')
          }

          console.log('[admin login] :', response)
          return response
        },
        // [使用者] 註冊
        register: async (data) => {
          const response = await register({
            name: data.name,
            account: data.account,
            email: data.email,
            password: data.password,
            checkPassword: data.checkPassword
          })

          console.log('[register] :', response)
          return response
        },
        // 登出
        logout: (msg='') => {
          localStorage.removeItem('token')
          setPayload(null)
          setHasToken(false)
          setLogoutAlertMsg(msg)
        },
        // 上一頁路徑
        prevPath
      }}
    >
      { children }
    </AuthContext.Provider>
  )
} 