import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { UserHeader, TabList, TabItem, ReplyList, UserProfile } from "components"
import { getUserInfo, getUserReply } from "../api/api_userPage";
//測試假資料
import { dummyUserRepliedTweets } from "../testData/dummyUserRepliedTweets";

/**
 * [前台] 使用者資料頁（回復）
 * @returns 
 */
const UserPageReplyList = () => {
    const [ userInfo, showUserInfo ] = useState('')
    const [ userReplyList, showUserReplyList ] = useState([])
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
        const getUserReplyAsync = async () => {
            try{
                const userReplyList = await getUserReply(user_id)
                showUserReplyList(userReplyList)
            }catch(error){
                console.error(error)
            }
        }
        getUserInfoAsync()
        getUserReplyAsync()
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
            <ReplyList repliedList={userReplyList}/>
        </>
    )
}

export default UserPageReplyList