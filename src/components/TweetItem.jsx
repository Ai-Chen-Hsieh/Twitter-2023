//尚未完成
// 1. 點擊回復icon 跳出replyModal的功能
// 2. 限制露端回傳的資料只有幾筆?? 超過會破版or下拉滾軸

import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { Avatar } from "."
import { ReactComponent as Comment } from "assets/images/comment.svg"
import { ReactComponent as Like } from "assets/images/like.svg"
import { ReactComponent as Liked } from "assets/images/liked.svg"

const StyledTweetItem = styled.div`
    width: 100%;
    height: 150px;
    border-bottom: 1px solid #E6ECF0;

    .post-section{
        display: flex;
        text-align: start;
        padding-top: 10px;
        padding-right: 10px;
        padding-left: 10px;        
        .avatar{
            width: 50px;
            height: 50px;
            border-radius: 50%;
            margin: 0  10px;
            &:hover {
                opacity: 0.8;
                cursor: pointer;
            }
        }
        .post-item{
            width: calc(100% - 70px);
        }
    }
    
    .account-info{
        width: 100%;
        line-height: 2.6rem;
        display: flex;
        .name{
            font-size: 1.6rem;
            font-weight: 700;
            margin-right: 7px;
            display:-webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow:hidden;
            &:hover {
                cursor: pointer;
                text-decoration: underline;
            }
        }
        .account{
            font-size: 1.4rem;
            color: var(--dark-70);
            flex: 1;
            display:-webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow:hidden;
        }
    }

    .content{
        width: 100%;
        height: 85px;
        font-size: 1.6rem;
        padding: 3px 0;
        display:-webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow:hidden;
        &:hover {
            cursor: pointer;
        }
    }
`
const StyledResponse = styled.div`
    color: var(--secondary);

    .response{
        display: inline-block;
        width: 80px;
        line-height: 1.4rem;
        vertical-align: center;
    }
    .reply-count, .like-count{
        margin-left: 5px;
}

`

const TweetItem = ({item, onLikeToggle}) => {
    const navigate = useNavigate()
    return (
        <StyledTweetItem>
            <div className="post-section">
                <div    
                    onClick={()=>{navigate(`/user/${item.UserId}`)}}
                    className="avatar">
                    <Avatar imageUrl={item.avatar} />
                </div>
                <div className="post-item">
                    <div className="account-info">
                        <span
                            onClick={()=>{navigate(`/user/${item.UserId}`)}} 
                            className="name">
                                {item.name}
                            </span>
                        <span className="account">@{item.account} · {item.createdAt}</span>
                    </div>
                    <div 
                        onClick={()=> {navigate(`/user/${item.UserId}/${item.id}`)}}
                        className="content">
                            {item.description}
                        </div>
                    <StyledResponse>
                        <span className="response reply">
                            <Comment />
                            <span className="reply-count">{item.repliedCount}</span>
                        </span>
                        <span
                            onClick={()=>{onLikeToggle(item.id)}}
                            className="response like">
                            {item.isLike ? <Liked /> : <Like />}
                            <span className="like-count">{item.likedCount}</span>
                        </span>
                    </StyledResponse>
                </div>
            </div>
        </StyledTweetItem>
    )
}

export default TweetItem
export{ StyledTweetItem as TweetItem }