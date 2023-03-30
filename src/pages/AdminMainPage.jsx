import styled from "styled-components"
import { useState, useEffect } from "react"
import { useAuth } from "contexts/AuthContext"
import { getAdminTweets, deleteAdminTweet } from "api/admin"
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
    const [deleteMsg, setDeleteMsg] = useState(null)
    const { logout } = useAuth()

    // 刪除推文顯示的消息
    useEffect(() => {
        if (deleteMsg) {
            Swal.fire({
                title: deleteMsg.title,
                icon: deleteMsg.icon,
                html: (deleteMsg.html) ? deleteMsg.html : '',
                showConfirmButton: false,
                timer: 3000,
                position: 'top',
            });
        }
    }, [deleteMsg])

    // 取得推文清單
    useEffect(() => {
        const getTweetsAsync = async () => {
            try {
                const response = await getAdminTweets()
                const logoutStatus = [401, 403]
                
                if (logoutStatus.includes(response.status)) {
                    logout(response.data.message)

                } else if (response.status === 200) {
                    const tweets = response.data.map((tweet) => {
                        return {
                            ...tweet
                        }
                    })
                    setTweets(tweets)
                }

            } catch (error) {
                console.log(error)
            }
        }

        getTweetsAsync()
    },[logout])
    
    // 刪除推文
    async function handleDelete(id) {
        try {
            const response = await deleteAdminTweet(id)
            const logoutStatus = [401, 403]
                
            if (logoutStatus.includes(response.status)) {
                logout(response.data.message)

            } else if (response.status === 200) {
                setTweets((prevTweets) => {
                    return prevTweets.filter((tweet) => {
                        return tweet.id !== id
                    })
                })
                setDeleteMsg({
                    title: '刪除成功!',
                    icon: 'success',
                })

            } else {
                setDeleteMsg({
                    title: '刪除失敗!',
                    icon: 'error',
                    html: `<p>${response.data.message}</p>`
                })
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <StyledContainer>
            <Header text="推文清單" />
            <AdminTweetList
                tweetList={tweets}
                onDelete={handleDelete}
            />
        </StyledContainer>
    )
}

export default AdminMainPage