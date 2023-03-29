import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { UserHeader, TabList, TabItem, TweetList, UserProfile } from "components"
import { getUserInfo, getUserLikeList } from "../api/api_userPage";
//測試假資料
import { dummyUserLikedTweets } from "../testData/dummyUserLikedTweet";

/**
 * [前台] 使用者資料頁（喜歡的內容）
 * @returns 
 */
const UserPageLikeList = () => {
    const [ userInfo, setUserInfo ] = useState('')
    const [ userLikeList, setUserLikeList ] = useState([])
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
        const userLikeListAsync = async () => {
            try{
                const userLikeList = await getUserLikeList(user_id)
                setUserLikeList(userLikeList)
            }catch(error){
                console.error(error)
            }
        }
        userInfoAsync()
        userLikeListAsync()
    },[])

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
            {/* {userLikeList.message==='沒有按任何貼文喜歡' ? 
             (<h1>userInfo.message</h1>):
             (<TweetList allTweets={dummyUserLikedTweets}/>)} */}
            
        </>
    )
}

export default UserPageLikeList