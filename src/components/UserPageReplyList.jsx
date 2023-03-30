import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import { UserHeader, TabList, TabItem, ReplyList, UserProfile } from "components"
import { getUserInfo } from "../api/api_userPageInfo";
import { getUserReply } from "../api/api_userPageReply";
/**
 * [前台] 使用者資料頁（回復）
 * @returns 
 */


const UserPageReplyList = () => {
    const [ userInfo, setUserInfo ] = useState('')
    const [ userReplyList, setUserReplyList ] = useState('')
    const { user_id } = useParams();

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
        //取得使用者回覆過的推文
        const getUserReplyAsync = async () => {
            try{
                const userReplyList = await getUserReply(user_id)
                //成功取得回覆，則更新reply list；否則return
                if (userReplyList.status === 200) {
                    setUserReplyList(()=>{
                        return[
                            ...userReplyList.data
                        ]
                    })
                } else{
                    return
                }
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