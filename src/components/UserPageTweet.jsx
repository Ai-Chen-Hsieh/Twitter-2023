/**
 * [前台] 推文回覆列表頁
 * @returns 
 */
import styled from "styled-components"
import { ReplyList, Tweet } from "."
import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import { HeaderContainer } from "./common/header.styled"
import { getUserPageTweet, getUserTweetReply } from "../api/api_userPagetweet"

//測試使用者假資料
import { dummyUserProfile } from "../testData/dummyUserProfile"
const StyledContainer = styled.div`
    display:flex;
    flex-direction: column;
`

const StyledHeaderLink = styled(Link)`
    position: relative;
    width: 64px;
    height: 100%;
    &:after {
        content: '';
        position: absolute;
        top: calc(50% - 19px);
        left: calc(50% - 21px);
        display: block;
        z-index: 1;
        border-radius: 50%;
        width: 38px;
        height: 38px;
        overflow: hidden;
        background-color: var(--dark-40);
        opacity: 0;
        transition: opacity .5s;
    }
    &:hover:after {
        opacity: 1;
    }
`

const StyledHeaderArrow = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    &:before,
    &:after {
        content: '';
        position: absolute;
        display: block;
        border-radius: 1px;
    }
    &:before {
        top: 50%;
        left: calc(50% - 8px);
        border-bottom: 3px solid var(--dark-100);
        width: 16px;
        height: 0px;
        overflow: hidden;
    }
    &:after {
        top: calc(50% - 5px);
        left: calc(50% - 8px);
        border: 3px solid var(--dark-100);
        border-top: none;
        border-right: none;
        width: 11px;
        height: 11px;
        transform: rotate(45deg);
    }
`
const StyledHeaderTitle = styled.div`
    width: calc(100% - 64px);
    padding-right: 24px;
`

const UserPageTweet = () => {
    const [ tweet, setTweet ] = useState('')
    const [ tweetReplyList, setTweetReplyList ] = useState('')
    const { tweet_id } = useParams()
    //新增回覆
    // function handleToggleLike () {
    //     setTweet((prevTweetInfo)=>{
    //         if(prevTweetInfo.isLike){
    //             return{
    //                 ...prevTweetInfo,
    //                 isLike: !prevTweetInfo.isLike,
    //                 likedCount: prevTweetInfo.likedCount - 1
    //             }
    //         } else {
    //             return{
    //                 ...prevTweetInfo,
    //                 isLike: !prevTweetInfo.isLike,
    //                 likedCount: prevTweetInfo.likedCount + 1
    //             }
    //         }
            
    //     })
    // }

    useEffect(()=>{
        //取得推文
        const getUserPageTweetAsync = async () => {            
            try{
                const tweetResponse = await getUserPageTweet(tweet_id)
                //成功取得推文, 失敗則不回傳任何東西
                if(tweetResponse.status === 200){
                    setTweet(tweetResponse.data)
                } else {
                    return
                }
                
            }catch(error){
                console.error(error)
            }
        } 
        //取得該推文所有回覆
        const getUserPageTweetReplyAsync = async () => {
            try{
                const tweetReplyResponse = await getUserTweetReply(tweet_id)
                console.log(tweetReplyResponse)
                //成功取得推文所有回覆，更新回覆列表;若失敗則return
                if(tweetReplyResponse.status === 200){
                    setTweetReplyList(()=>{
                        return[
                            ...tweetReplyResponse.data
                        ]
                    })
                }else{
                    return
                }
            }catch(error){
                console.error(error)
            }
        }
        getUserPageTweetAsync()
        getUserPageTweetReplyAsync()
    },[tweet_id])
    return (
        <StyledContainer>
            <HeaderContainer>
                <StyledHeaderLink to="/main" aria-label="回首頁" title="回首頁">
                    <StyledHeaderArrow/>
                </StyledHeaderLink>
                <StyledHeaderTitle>
                        <h5>推文</h5>
                    </StyledHeaderTitle>
            </HeaderContainer>
            <Tweet 
                tweet={tweet}
                userInfo={dummyUserProfile}
            />
            <ReplyList repliedList={tweetReplyList}/>
        </StyledContainer>
    )
}

export default UserPageTweet