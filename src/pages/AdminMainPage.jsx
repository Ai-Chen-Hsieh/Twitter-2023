import styled from "styled-components"
import { useState, useEffect } from "react"
import { useAuth } from "contexts/AuthContext"
import { getAdminTweets } from "api/admin"
import { AdminTweetList, Header } from "components"
import Swal from "sweetalert2"

const StyledContainer = styled.div`
    width: 100%;
    border-right: 1px solid var(--gray-20);
    height: 100%;
    min-height: 100vh;
    max-width: calc(100% - 130px);
`

/**
 * [後台] 推文清單頁
 * @returns 
 */
const AdminMainPage = () => {
    const [tweets, setTweets] = useState([])
    const [logoutMsg, setLogoutMsg] = useState('')
    const { logout } = useAuth()

    useEffect(() => {
        if (logoutMsg.length > 0) {
            Swal.fire({
                title: '請重新登入!',
                icon: 'info',
                html: `<p>${logoutMsg}</p>`,
                showConfirmButton: false,
                timer: 3000,
                position: 'top',
            });
            logout()
        }
    }, [logoutMsg, logout])

    useEffect(() => {
        const getTweetsAsync = async () => {
            try {
                const response = await getAdminTweets()
                const logoutStatus = [401, 403]
                
                if (logoutStatus.includes(response.status)) {
                    setLogoutMsg(response.data.message)

                } else if (response.status === 200) {
                    const users = response.data.map((user) => {
                        return {
                            ...user
                        }
                    })
                    setTweets(users)
                }
            } catch (error) {
                console.log(error)
            }
        }

        getTweetsAsync()
    },[])

    return (
        <StyledContainer>
            <Header text="推文清單" />
            <AdminTweetList tweetList={tweets} />
        </StyledContainer>
    )
}

export default AdminMainPage