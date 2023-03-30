import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { UserHeader, TabList, TabItem, UserProfile } from "components"
import { TweetList } from "components";
import { getUserInfo } from "../api/api_userPageInfo";
//測試假資料
import { dummyUserTweets } from "../testData/dummyUserTweets";

/**
 * [前台] 使用者資料頁（推文）
 * @returns 
 */
const UserPage = () => {
    const [ userInfo, showUserInfo ] = useState('')
    const { user_id } = useParams();

    useEffect(()=>{
        const getUserInfoAsync = async () => {
            try{
                const userInfo = await getUserInfo(user_id)
                showUserInfo(userInfo)
            }catch(error){
                console.error(error)
            }
        }
        getUserInfoAsync()
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
            <TweetList allTweets={dummyUserTweets}/>
        </>
    )
}

export default UserPage