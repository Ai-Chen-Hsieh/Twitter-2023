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
    h1{
        font-size: 1.6rem;
        text-align: center;
    }
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
        padding-left: 10px;
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

const Tweet = ({tweet, userInfo, onToggleLike}) => {
    const [ showReplyModal, setShowReplyModal ] = useState(false)     

    if(typeof tweet === 'string' ){
        return(
            <StyledTweetContainer>
                <h1>找不到推文</h1>
            </StyledTweetContainer>
        )
    }else{
        return (
            <>
                <StyledTweetContainer>
                    <StyledAuthInfoBlock>
                        <StyledAvatar to={`/user/${tweet.UserId}`}>
                            <Avatar 
                                imageUrl={tweet.avatar}
                            />
                        </StyledAvatar>
                        <StyledAuthInfo>
                            <StyledName to={`/user/${tweet.UserId}`}>
                                {tweet.name}
                            </StyledName>
                            <StyledAccount>
                                @{tweet.account}
                            </StyledAccount>
                        </StyledAuthInfo>
                    </StyledAuthInfoBlock>
                    <StyledTweet>
                        {tweet.description}
                    </StyledTweet>
                    <StyledCreatedAt>
                            {tweet.createdAt}
                        </StyledCreatedAt>
                    <StyledCountBlock>
                        <StyledCount>
                            <span className="count">{tweet.repliedCount}</span>
                            回覆
                            </StyledCount>
                        <StyledCount>
                            <span className="count">{tweet.likedCount}</span>
                            喜歡次數
                            </StyledCount>
                    </StyledCountBlock>
                    <StyledReplyIconBlock>
                        <StyledComment 
                            onClick={()=>{
                                setShowReplyModal(true)
                            }}
                        />
                        {tweet.isLike ? 
                        (<StyledLiked 
                            onClick={onToggleLike}
                        /> ) : 
                        (  <StyledLike 
                            onClick={onToggleLike}
                        /> )}
                    </StyledReplyIconBlock>
                </StyledTweetContainer>
                {showReplyModal && createPortal(
                    <ReplyModal
                        userInfo={userInfo}
                        tweet={tweet}
                        onClose={()=> setShowReplyModal(false)}/>,
                    document.body
                )}
            </>
        )
    }
 
    
}

export default Tweet