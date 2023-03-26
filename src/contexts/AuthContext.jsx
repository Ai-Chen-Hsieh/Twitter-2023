import { createContext, useContext } from "react"
import { login } from "api/auth"

const defaultAuthContext = {
  hasToken: false, // 檢查是否有 token
  registrant: null, // 登入者資訊 
  login: null, // 登入
}

const AuthContext = createContext(defaultAuthContext)
const useAuth = () => { return useContext(AuthContext) }

