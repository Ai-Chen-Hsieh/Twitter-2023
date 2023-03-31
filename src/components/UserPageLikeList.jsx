import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { UserHeader, TabList, TabItem, TweetList, UserProfile } from "components"
import { getUserInfo } from "../api/api_userPageInfo";
import { addFollowing, cancelFollowing } from "../api/api_followShip";
import { dummyUserLikedTweets } from "../testData/dummyUserLikedTweet";

/**
 * [前台] 使用者資料頁（喜歡的內容）
 * @returns 
 */
const UserPageLikeList = () => {
    const [ userInfo, setUserInfo ] = useState('')
    const { user_id } = useParams()

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
             <TweetList allTweets={dummyUserLikedTweets}/>
            
        </>
    )
}

export default UserPageLikeList