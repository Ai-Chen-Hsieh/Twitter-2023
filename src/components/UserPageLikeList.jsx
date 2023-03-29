import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { UserHeader, TabList, TabItem, TweetList, UserProfile } from "components"
import { getUserInfo } from "../api/api_userPage";
import { dummyUserLikedTweets } from "../testData/dummyUserLikedTweet";

/**
 * [前台] 使用者資料頁（喜歡的內容）
 * @returns 
 */
const UserPageLikeList = () => {
    const [ userInfo, setUserInfo ] = useState('')
    const { user_id } = useParams()

    useEffect(()=>{
        const userInfoAsync = async () => {
            try{
                const userInfo = await getUserInfo(user_id)
                setUserInfo(userInfo)
            }catch(error){
                console.error(error)
            }
        } 
        userInfoAsync()
    },[user_id])

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
            />
            <TabList>
                <TabItem to={`/user/${user_id}`} text="推文" />
                <TabItem to={`/user/${user_id}/reply`} text="回覆" />
                <TabItem to={`/user/${user_id}/like`} text="喜歡的內容" />
            </TabList>
             <TweetList allTweets={dummyUserLikedTweets}/>
            
        </>
    )
}

export default UserPageLikeList