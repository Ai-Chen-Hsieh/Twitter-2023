import styled from "styled-components"
import { useState } from "react"
import { createPortal } from "react-dom"
import { Link } from "react-router-dom"
import { Avatar, ReplyModal } from "."
import { ReactComponent as Comment } from "assets/images/comment.svg"
import { ReactComponent as Like } from "assets/images/like.svg"
import { ReactComponent as Liked } from "assets/images/liked.svg"

const StyledTweetContainer = styled.div`
    min-height: 350px;
    display: flex;
    flex-direction: column;
`
//推文作者帳號block
const StyledAuthInfoBlock = styled.div`
    width: 100%;
    height: 70px;
    padding: 10px;
    display: flex;
`

const StyledAvatar = styled(Link)`
    width: 50px;
    height: 50px;
    &:hover {
        opacity: 0.6;
    }
`

const StyledAuthInfo = styled.div`
    margin-left: 10px;
    display: flex;
    flex-direction: column;
`

const StyledName = styled(Link)`
    color: var(--dark-100);
    font-size: 1.6rem;
    font-weight: 700;
    text-decoration: none;
    &:hover{
        text-decoration: underline;
    }
`

const StyledAccount = styled.span`
    color: var(--secondary);
    font-size: 1.4rem;
`
//推文block
const StyledTweet = styled.div`
    min-height: 150px; 
    padding: 10px;
    font-size: 2.4rem;
`

const StyledCreatedAt = styled.div`
        height: 30px;
        margin-top: 10px;
        margin-bottom: 0;
        color: var(--secondary);
        font-size: 1.4rem;
`
//回覆&喜歡次數block
const StyledCountBlock = styled.div`
    border-style: solid;
    border-width: 1px 0px 1px 0px;
    border-color: var(--gray-20);
    margin: 0 10px;
    display: flex;
    align-items: center;
    height: 50px;
    color: var(--secondary);
`

const StyledCount = styled.span`
    margin-right: 10px;
    padding: 10px;
    .count{
        display: inline-block;
        margin-right: 5px;
        font-size: 1.9rem;
        font-weight: 700;
        color: var(--dark-100);
    }
`
//回覆&喜歡次數icon block
const StyledReplyIconBlock = styled.div`
    flex: 1;
    display: flex;
    align-items: center;    
    margin: 0 10px;
    border-bottom: 1px solid var(--gray-20);
`

const StyledComment = styled(Comment)`
    width: 25px;
    height: 25px;
    margin: 10px 20px;
    &:hover {
        cursor: pointer;
        opacity: 0.6;
    }
`

const StyledLike = styled(Like)`
    width: 25px;
    height: 25px;
    margin: 10px 30px;
    &:hover {
        cursor: pointer;
        opacity: 0.6;
    }
`

const StyledLiked = styled(Liked)`
    width: 25px;
    height: 25px;
    margin: 10px 30px;
    &:hover {
        cursor: pointer;
        opacity: 0.6;
    }
`

const Tweet = ({tweet, userInfo}) => {
    const [ showReplyModal, setShowReplyModal ] = useState(false)
    const [ tweetInfo, setReply ] = useState(tweet)

    function handleToggleLike () {
        setReply((prevTweetInfo)=>{
            if(prevTweetInfo.isLike){
                return{
                    ...prevTweetInfo,
                    isLike: !prevTweetInfo.isLike,
                    likedCount: prevTweetInfo.likedCount - 1
                }
            } else {
                return{
                    ...prevTweetInfo,
                    isLike: !prevTweetInfo.isLike,
                    likedCount: prevTweetInfo.likedCount + 1
                }
            }
            
        })
    }

    return (
        <>
            <StyledTweetContainer>
                <StyledAuthInfoBlock>
                    <StyledAvatar to={`/user/${tweetInfo.UserId}`}>
                        <Avatar 
                            imageUrl={tweet.avatar}
                        />
                    </StyledAvatar>
                    <StyledAuthInfo>
                        <StyledName to={`/user/${tweetInfo.UserId}`}>
                            {tweet.name}
                        </StyledName>
                        <StyledAccount>
                            @{tweet.account}
                        </StyledAccount>
                    </StyledAuthInfo>
                </StyledAuthInfoBlock>
                <StyledTweet>
                    {tweet.description}
                    <StyledCreatedAt>
                        {tweet.createdAt}
                    </StyledCreatedAt>
                </StyledTweet>
                <StyledCountBlock>
                    <StyledCount>
                        <span className="count">{tweetInfo.repliedCount}</span>
                        回覆
                        </StyledCount>
                    <StyledCount>
                        <span className="count">{tweetInfo.likedCount}</span>
                        喜歡次數
                        </StyledCount>
                </StyledCountBlock>
                <StyledReplyIconBlock>
                    <StyledComment 
                        onClick={()=>{
                            setShowReplyModal(true)
                        }}
                    />
                    {tweetInfo.isLike ? 
                    (<StyledLiked 
                        onClick={handleToggleLike}
                    /> ) : 
                    (  <StyledLike 
                        onClick={handleToggleLike}
                    /> )}
                </StyledReplyIconBlock>
            </StyledTweetContainer>
            {showReplyModal && createPortal(
                <ReplyModal
                    userInfo={userInfo}
                    tweet={tweetInfo}
                    onClose={()=> setShowReplyModal(false)}/>,
                document.body
            )}
        </>
    )
}

export default Tweet