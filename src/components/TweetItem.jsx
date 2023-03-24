import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { Avatar } from "."
import { ReactComponent as Comment } from "assets/images/comment.svg"
import { ReactComponent as Like } from "assets/images/like.svg"


// 點擊回復icon 跳出replyModal的功能尚未完成

const StyledTweetItem = styled.div`
    width: 100%;
    height: 150px;
    border-bottom: 1px solid #E6ECF0;

    .post-section{
        display: flex;
        text-align: start;
        padding-top: 10px;        
        .avatar{
            width: 50px;
            height: 50px;
            margin: 0  10px;
        }
        .post-item{
            width: 400px;
        }
    }
    
    .account-info{
        width: 400px;
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
        height: 60%;
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
    .response-section{
        color: var(--secondary);
        .response{
            display: inline-block;
            width: 80px;
            line-height: 1.4rem;
            vertical-align: center;
        }
        .comment-count, .like-count{
            margin-left: 5px;
        }
    }

`

const TweetItem = ( {item} ) => {
    const navigate = useNavigate()
    return (
        <StyledTweetItem>
            <div className="post-section">
                <div className="avatar">
                    <Avatar 
                        imageUrl={item.avatar}
                    />
                </div>
                <div className="post-item">
                    <div className="account-info">
                        <span
                            onClick={()=>{ navigate(`/user/${item.id}`) }} 
                            className="name">{item.name}</span>
                        <span className="account">{item.account} · {item.createdAt}</span>
                    </div>
                    <div 
                        onClick={()=> { navigate(`/user/${item.tweet_id}`) }}
                        className="content">{item.content}</div>
                    <div className="response-section">
                        <span className="response comment">
                            <Comment />
                            <span className="comment-count">{item.replyCount}</span>
                        </span>
                        <span className="response like">
                            <Like stroke="yellow"/>
                            <span className="like-count">{item.likeCount}</span>
                        </span>

                    </div>
                </div>
            </div>
        </StyledTweetItem>
    )
}

export default TweetItem