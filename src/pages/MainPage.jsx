import { useState, useEffect } from "react"
import { useAuth } from "contexts/AuthContext"
import { createPortal } from "react-dom"
import { getTweets, likeTweet, unlikeTweet, replyTweet } from "api/tweets"
import styled from "styled-components" 
import { Header, TweetList, TweetModal, UserTweet, ReplyModal } from "components"
import { ResponseEmpty } from "components/common/response.styled"
import Swal from "sweetalert2"

const StyledMainContainer = styled.div`
    height:100%;
    border:1px solid var(--gray-20);
`

/**
 * [前台] 首頁
 * @returns 
 */
const MainPage = () => {
    const [ tweets, setTweets ] = useState([])
    const [ emptyMsg, setEmptyMsg ] = useState('')
    const [ showReplyModal, setShowReplyModal ] = useState(false)
    const [ tweetForReplyModal, setTweetForReplyModal ] = useState(null)
    const [ replyTweetResAlert, setReplyTweetResAlert] = useState(null)
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

                } else {
                    setEmptyMsg(response.data.message)
                }

            } catch (error) {
                console.log(error)
            }
        }

        getTweetsAsync()
    },[logout])

    // 顯示回覆推文成功與否的彈跳視窗
    useEffect(() => {
        if (replyTweetResAlert) {
            Swal.fire({
                title: replyTweetResAlert.title,
                icon: replyTweetResAlert.icon,
                html: (replyTweetResAlert.html) ? replyTweetResAlert.html : '',
                showConfirmButton: false,
                timer: 3000,
                position: 'top',
            });
        }
    }, [replyTweetResAlert])
    
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

    // 處理顯示回覆彈跳視窗
    function handleShowReplyModal (tweet) {
        setTweetForReplyModal(tweet)
        setShowReplyModal(true)
    }

    // 處理回覆推文
    async function handleReplyTweet({ tweetId, comment }){
        try {
            const response = await replyTweet({
                tweetId,
                comment
            })
            const logoutStatus = [401, 403]
            
            if (logoutStatus.includes(response.status)) {
                logout(response.data.message)

            } else if (response.status === 200) {
                setReplyTweetResAlert({
                    title: '回覆成功!',
                    icon: 'success',
                    html: `<p>${response.data.message}</p>`
                })
                setShowReplyModal(false)

                const currentItem = tweets.find(tweet => tweet.id === tweetId )
                setTweets((prevTweets) => {
                    return prevTweets.map((tweet) => {
                        if (tweet.id === tweetId) {
                            return{
                                ...tweet,
                                repliedCount: currentItem.repliedCount + 1 
                            }
                        }
                        return tweet
                    })
                })

            } else {
                setReplyTweetResAlert({
                    title: '回覆失敗!',
                    icon: 'error',
                    html: `<p>${response.data.message}</p>`
                })
                setShowReplyModal(false)
            }

        } catch (error) {
            console.log(error)
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
                {
                    (emptyMsg.length > 0) ? 
                    <ResponseEmpty>{emptyMsg}</ResponseEmpty> : 
                    <TweetList
                        tweetList={tweets}
                        onLikeToggle={handleLikeToggle}
                        onShowReplyModal={handleShowReplyModal}
                    />
                }
            </StyledMainContainer>

            {/* 回覆彈跳視窗 */}
            {(showReplyModal && tweetForReplyModal) && createPortal(
                <ReplyModal 
                    userInfo={currentRegistrant}
                    tweet={tweetForReplyModal}
                    onClose={() => setShowReplyModal(false)}
                    onReplyTweet={handleReplyTweet}
                />,
                document.body
            )}

            {/* 推文彈跳視窗 */}
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