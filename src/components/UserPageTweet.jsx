import styled from "styled-components"
import { useState, useEffect } from "react"
import { useAuth } from "contexts/AuthContext"
import { Link, useParams } from "react-router-dom"
import { ReplyList, Tweet } from "."
import { HeaderContainer } from "./common/header.styled"
// api 串接
import { likeTweet, unlikeTweet } from "api/tweets"
import { getUserPageTweet, getUserTweetReply } from "../api/api_userPagetweet"
import { useModal } from "contexts/ModalContext"

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

/**
 * [前台] 推文回覆列表頁
 * @returns 
 */
const UserPageTweet = () => {
    const [ tweet, setTweet ] = useState('')
    const [ tweetReplyList, setTweetReplyList ] = useState('')
    const { logout } = useAuth()
    const { newReply, handleShowReplyModal } = useModal()
    const { tweet_id } = useParams()

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

    // 有新回覆
    useEffect(()=>{
        if (newReply) {
            setTweetReplyList((prevReplyList) => {
                return [
                    {
                        ...newReply
                    },
                    ...prevReplyList
                ]
            })

            setTweet((prevTweet) => {
                return {
                    ...prevTweet,
                    repliedCount: prevTweet.repliedCount + 1
                }
            })
        }
    },[newReply])

    // 處理收藏/取消收藏推文
    async function handleLikeToggle(tweet) {
        if (tweet.isLike) {
            // true -> 取消收藏
            try {
                const response = await unlikeTweet(tweet.id)
                const logoutStatus = [401, 403]
                
                if (logoutStatus.includes(response.status)) {
                    logout(response.data.message)

                } else if (response.status === 200) {
                    setTweet({
                        ...tweet,
                        isLike: !tweet.isLike,
                        likedCount: tweet.likedCount - 1 
                    })
                }

            } catch (error) {
                console.log(error)
            }

        } else {
            // false -> 收藏
            try {
                const response = await likeTweet(tweet.id)
                const logoutStatus = [401, 403]
                
                if (logoutStatus.includes(response.status)) {
                    logout(response.data.message)

                } else if (response.status === 200) {
                    setTweet({
                        ...tweet,
                        isLike: !tweet.isLike,
                        likedCount: tweet.likedCount + 1 
                    })
                }

            } catch (error) {
                console.log(error)
            }
        }
    }

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
                onToggleLike={handleLikeToggle}
                onShowReplyModal={handleShowReplyModal}
            />
            <ReplyList repliedList={tweetReplyList}/>
        </StyledContainer>
    )
}

export default UserPageTweet