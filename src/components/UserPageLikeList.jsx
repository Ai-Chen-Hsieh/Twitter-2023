import { useState, useEffect } from "react"
import { createPortal } from "react-dom"
import { useParams } from "react-router-dom"
import { useAuth } from "contexts/AuthContext"
import { UserHeader, TabList, TabItem, TweetList, UserProfile, ReplyModal } from "components"
import { getUserInfo } from "../api/api_userPageInfo";
import { addFollowing, cancelFollowing } from "../api/api_followShip";
import { likeTweet, unlikeTweet, replyTweet } from "api/tweets"
import { getUserLikes } from "api/userLikes";
import { ResponseEmpty } from "./common/response.styled";
import Swal from "sweetalert2"

/**
 * [前台] 使用者資料頁（喜歡的內容）
 * @returns 
 */
const UserPageLikeList = () => {
    const [ userInfo, setUserInfo ] = useState('')
    const [ tweets, setTweets ] = useState([])
    const [ emptyMsg, setEmptyMsg ] = useState('')
    const [ showReplyModal, setShowReplyModal ] = useState(false)
    const [ tweetForReplyModal, setTweetForReplyModal ] = useState(null)
    const [ replyTweetResAlert, setReplyTweetResAlert] = useState(null)
    const { user_id } = useParams()
    const { logout, currentRegistrant } = useAuth()

     //處理追蹤使用者
     function handleFollowing (id) {
        console.log(id)
        //新增追蹤者
        const addFollowingAsync = async () => {
            const response = await addFollowing(id)
            console.log(response)
            //成功追蹤
            if(response.status === 200){
                setUserInfo((prevUserInfo)=>{
                    return{
                        ...prevUserInfo,
                        isFollowing: !prevUserInfo.isFollowing
                    }
                })
            }else{
                return
            }
        }
        //取消追蹤
        const cancelFollowingAsync = async () => {
            const response = await cancelFollowing(id)
            //成功取消
            if(response.status === 200){
                setUserInfo((prevUserInfo)=>{
                    return{
                        ...prevUserInfo,
                        isFollowing: !prevUserInfo.isFollowing
                    }
                })
            }else{
                return
            }
        
        }
        //判斷是否追蹤
        if(userInfo.isFollowing){
            cancelFollowingAsync()
        } else {
            addFollowingAsync()
        }
    }


    useEffect(()=>{
        const getUserInfoAsync = async () => {
            try{
                const userInfoResponse = await getUserInfo(user_id)
                if(userInfoResponse.status === 200){
                    setUserInfo(userInfoResponse.data)
                } else {
                    setUserInfo(()=>{
                        return{
                            name: 'not found',
                            tweetCount: 'not found',
                            account: 'not found',
                            description: 'not found',
                            backgroundImageUrl: 'not found',
                            imageUrl:'not found',
                            followingCount: 'not found',
                            followerCount: 'not found',
                        }
                    })
                }
            }catch(error){
                console.error(error)
            }
        }
        getUserInfoAsync()
    },[user_id])

    // 取得特定使用者收藏過的貼文
    useEffect(() => {
        const getUserTweetsAsync = async () => {
            try {
                const response = await getUserLikes(user_id)
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
        const isCurrentRegistrant = (currentRegistrant.id.toString() === user_id ) ? true : false
        const currentItem = tweets.find(tweet => tweet.id === id )

        if (currentItem.isLike) {
            // true -> 取消收藏
            try {
                const response = await unlikeTweet(id)
                const logoutStatus = [401, 403]
                
                if (logoutStatus.includes(response.status)) {
                    logout(response.data.message)

                } else if (response.status === 200) {
                    // 如果該使用者是登入者本人，取消收藏推文後讓該推文從畫面中消失
                    if (isCurrentRegistrant) {
                        setTweets((prevTweets) => {
                            return prevTweets.filter((tweet) => {
                                return tweet.id !== id
                            })
                        })

                    } else {
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
                name={userInfo.name}
                tweetCount={userInfo.tweetCount}
            />
            <UserProfile
                name={userInfo.name}
                account={userInfo.account}
                description={userInfo.introduction}
                backgroundImageUrl={userInfo.cover}
                imageUrl={userInfo.avatar}
                followingCount={userInfo.followingCount}
                followerCount={userInfo.followerCount}
                isFollowing={userInfo.isFollowing}
                onToggleFollow={handleFollowing}
            />
            <TabList>
                <TabItem to={`/user/${user_id}`} text="推文" />
                <TabItem to={`/user/${user_id}/reply`} text="回覆" />
                <TabItem to={`/user/${user_id}/like`} text="喜歡的內容" />
            </TabList>
            {
                (emptyMsg.length > 0) ? 
                <ResponseEmpty>{emptyMsg}</ResponseEmpty> : 
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

export default UserPageLikeList