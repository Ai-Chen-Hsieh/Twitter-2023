import { useState, useEffect } from "react"
import { useAuth } from "contexts/AuthContext"
import { createPortal } from "react-dom"
import { getTweets, likeTweet, unlikeTweet } from "api/tweets"
import styled from "styled-components" 
import { Header, TweetList, TweetModal, UserTweet } from "components"

const StyledMainContainer = styled.div`
    height:100%;
    border:1px solid var(--gray-20);
`

/**
 * [前台] 首頁
 * @returns 
 */
const MainPage = () => {
    const [tweets, setTweets] = useState([])
    const [ showTweetModal, setShowTweetModal ] = useState(false)
    const { logout, currentRegistrant } = useAuth()

    // 取得推文清單
    useEffect(() => {
        const getTweetsAsync = async () => {
            try {
                const response = await getTweets()
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

    // 處理收藏/取消收藏推文
    async function handleLikeToggle(id) {
        const currentItem = tweets.find(tweet => tweet.id === id )

        if (currentItem.isLike) {
            // true -> 取消收藏
            try {
                const response = await unlikeTweet(id)
                const logoutStatus = [401, 403]
                
                if (logoutStatus.includes(response.status)) {
                    logout(response.data.message)

                } else if (response.status === 200) {
                    setTweets((prevTweets) => {
                        return prevTweets.map((tweet) => {
                            if (tweet.id === id) {
                                return{
                                    ...tweet,
                                    isLike: !currentItem.isLike,
                                    likedCount: currentItem.likedCount - 1 
                                }
                            }
                            return tweet
                        })
                    })
                }
            } catch (error) {
                console.log(error)
            }

        } else {
            // false -> 收藏
            try {
                const response = await likeTweet(id)
                const logoutStatus = [401, 403]
                
                if (logoutStatus.includes(response.status)) {
                    logout(response.data.message)

                } else if (response.status === 200) {
                    setTweets((prevTweets) => {
                        return prevTweets.map((tweet) => {
                            if (tweet.id === id) {
                                return{
                                    ...tweet,
                                    isLike: !currentItem.isLike,
                                    likedCount: currentItem.likedCount + 1 
                                }
                            }
                            return tweet
                        })
                    })
                }

            } catch (error) {
                console.log(error)
            }
        }
    }

    function handleClick(){
        setShowTweetModal(true)
    }

    return (
        <>
            <StyledMainContainer>
                <Header text="首頁" />
                <UserTweet 
                    item={currentRegistrant}
                    onClick={handleClick}
                    onLikeToggle={handleLikeToggle}
                />
                <TweetList
                    tweetList={tweets}
                    userInfo={currentRegistrant}
                    onLikeToggle={handleLikeToggle}
                />
            </StyledMainContainer>
            {showTweetModal && createPortal(
                <TweetModal
                    onClose={() => setShowTweetModal(false)}
                    userInfo={currentRegistrant}
                />,
                document.body
            )}
        </>

    )
}

export default MainPage