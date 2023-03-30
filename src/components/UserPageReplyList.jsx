import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import styled from "styled-components";
import { UserHeader, TabList, TabItem, ReplyList, UserProfile } from "components"
import { getUserInfo } from "../api/api_userPageInfo";
import { getUserReply } from "../api/api-userPageReply";
/**
 * [前台] 使用者資料頁（回復）
 * @returns 
 */

const StyledNoReplied = styled.div`
    width:100%;
    min-height: 500px;
    border-top: 1px solid #E6ECF0;
    font-weight: 700;
    font-size: 1.6rem;
    padding-top: 20px;
    text-align: center;
    
`

const UserPageReplyList = () => {
    const [ userInfo, setUserInfo ] = useState('')
    const [ userReplyList, setUserReplyList ] = useState([])
    const { user_id } = useParams();
    const noReplied = '尚未回覆任何推文';

    useEffect(()=>{
        const getUserInfoAsync = async () => {
            try{
                const userInfo = await getUserInfo(user_id)
                setUserInfo(userInfo)
            }catch(error){
                console.error(error)
            }

        }
        //取得使用者回覆過的推文
        const getUserReplyAsync = async () => {
            try{
                const userReplyList = await getUserReply(user_id)
                if(userReplyList.status === 404){
                    setUserReplyList(()=>{
                        return[
                            noReplied
                        ]
                    })
                } else if (userReplyList.status === 200) {
                    setUserReplyList(userReplyList.data)
                    return
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
            {(userReplyList[0] === noReplied) ? (
                <StyledNoReplied>尚未回覆任何推文</StyledNoReplied>
            ): (
                <ReplyList repliedList={userReplyList}/>
            )}
            
        </>
    )
}

export default UserPageReplyList