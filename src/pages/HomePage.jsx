import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "contexts/AuthContext"

const HomePage = () => {
    const { hasToken } = useAuth()
    let navigate = useNavigate()
    
    // 檢查是否有 token
    useEffect(() => {
        const prevPath = (localStorage.getItem('prevPath')) ? localStorage.getItem('prevPath') : '/main'
        
        if (!hasToken) {
            navigate('/login')
        } else {
            navigate(prevPath)
        }
    }, [navigate, hasToken])
}

export default HomePage
