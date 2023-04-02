import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const HomePage = () => {
    let navigate = useNavigate()
    
    // 檢查是否有 token
    useEffect(() => {
        console.log('Home page.')
        const prevPath = (localStorage.getItem('prevPath')) ? localStorage.getItem('prevPath') : '/main'
        localStorage.setItem('passHomePage', 'true')
        navigate(prevPath)
    }, [navigate])
}

export default HomePage
