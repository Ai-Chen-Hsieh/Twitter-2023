import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { useParams } from "react-router-dom"
import { useAuth } from "contexts/AuthContext"
import { getUserTweets } from "api/userTweets"
import { likeTweet, unlikeTweet, replyTweet } from "api/tweets"
import styled from "styled-components"
import { UserHeader, TabList, TabItem, UserProfile, TweetList, ReplyModal } from "components"
//測試假資料
import { dummyUserProfile } from "../testData/dummyUserProfile"
import Swal from "sweetalert2"

const StyledErrorMsg = styled.p`
    padding: 32px 16px;
    text-align: center;
    font-weight: 700;
    color: var(--secondary);
`

/**
 * [前台] 使用者資料頁（推文）
 * @returns 
 */
const UserPage = () => {
    const [ tweets, setTweets ] = useState([])
    const [ emptyMsg, setEmptyMsg ] = useState('')
    const [ showReplyModal, setShowReplyModal ] = useState(false)
    const [ tweetForReplyModal, setTweetForReplyModal ] = useState(null)
    const [ replyTweetResAlert, setReplyTweetResAlert] = useState(null)
    const userProfile = dummyUserProfile
    const { user_id } = useParams()
    const { logout, currentRegistrant } = useAuth()

    // 取得特定使用者發過的推文
    useEffect(() => {
        const getUserTweetsAsync = async () => {
            try {
                const response = await getUserTweets(user_id)
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

        getUserTweetsAsync()
    }, [logout, user_id])

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
    

    return (
        <>
            <UserHeader
                name="anna"
                tweetCount={10}
            />
            <UserProfile
                name={userProfile.name}
                account={userProfile.account}
                description={userProfile.introduction}
                backgroundImageUrl={userProfile.cover}
                imageUrl={userProfile.avatar}
                followingCount={userProfile.followingCount}
                followerCount={userProfile.followerCount}
            />
            <TabList>
                <TabItem to={`/user/${user_id}`} text="推文" />
                <TabItem to={`/user/${user_id}/reply`} text="回覆" />
                <TabItem to={`/user/${user_id}/like`} text="喜歡的內容" />
            </TabList>
            {
                (emptyMsg.length > 0) ? 
                <StyledErrorMsg>{emptyMsg}</StyledErrorMsg> : 
                <TweetList
                    tweetList={tweets}
                    onLikeToggle={handleLikeToggle}
                    onShowReplyModal={handleShowReplyModal}
                />
            }

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
        </>
    )
}

export default UserPage