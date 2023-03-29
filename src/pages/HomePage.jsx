import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "contexts/AuthContext"

const HomePage = () => {
    const { hasToken, prevPath } = useAuth()
    let navigate = useNavigate()
    
    // 檢查是否有 token
    useEffect(() => {
        if (!hasToken) {
            navigate('/login')
        } else {
            navigate(prevPath)
        }
    }, [navigate, hasToken, prevPath])
}

export default HomePage
