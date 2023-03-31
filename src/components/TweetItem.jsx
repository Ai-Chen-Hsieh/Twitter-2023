import styled from "styled-components"
import { Avatar, DateDiffFormatter } from "."
import { ReactComponent as Comment } from "assets/images/comment.svg"
import { ReactComponent as Like } from "assets/images/like.svg"
import { ReactComponent as Liked } from "assets/images/liked.svg"
import { Link } from "react-router-dom"

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
            display: inline-block;
            font-size: 1.6rem;
            font-weight: 700;
            margin-right: 7px;
            display:-webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow:hidden;
            text-decoration: none;
            color: var(--dark-100);
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
        display: block;
        width: 100%;
        height: 85px;
        font-size: 1.6rem;
        padding: 3px 0;
        display:-webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        overflow:hidden;
        color: var(--dark-100);
        text-decoration: none;
        transition: color .5s;
        &:hover {
            cursor: pointer;
            color: var(--secondary);
        }
    }
`
const StyledResponse = styled.div`
    color: var(--secondary);

    .response{
        display: inline-block;
        border: none;
        width: 48px;
        padding: 0px;
        line-height: 1.4rem;
        vertical-align: middle;
        text-align: left;
        transition: opacity .5s;
        background-color: transparent;
        > svg,
        > span {
            display: inline-block;
            vertical-align: middle;
        }
        &:hover {
            cursor: pointer;
            opacity: 0.6;
        }
    }
    .response:not(:last-child) {
        margin-right: 16px;
    }
    .reply-count, .like-count{
        margin-left: 5px
    }

`

/**
 * 推文清單項目
 * @param {object} item - 推文清單項目
 * @param {function} onLikeToggle - 處理收藏/取消收藏推文
 * @param {function} onShowReplyModal - 處理顯示回覆彈跳視窗
 * @returns 
 */
const TweetItem = ({item, onLikeToggle, onShowReplyModal}) => {
    return (
        <StyledTweetItem>
            <div className="post-section">
                <Link    
                    to={`/user/${item.UserId}`}
                    title={`查看 ${item.name} 的個人資料`}
                    aria-label={`查看 ${item.name} 的個人資料`}
                    className="avatar"
                >
                    <Avatar imageUrl={item.avatar} />
                </Link>
                <div className="post-item">
                    <div className="account-info">
                        <Link
                            to={`/user/${item.UserId}`}
                            title={`查看 ${item.name} 的個人資料`}
                            aria-label={`查看 ${item.name} 的個人資料`}
                            className="name"
                        >
                            {item.name}
                        </Link>
                        <span className="account">@{item.account}・<DateDiffFormatter date={item.createdAt}/></span>
                    </div>

                    <Link
                        to={`/user/${item.UserId}/${item.id}`}
                        title={`查看推文內容`}
                        aria-label={`查看推文內容`}
                        className="content"
                    >
                        {item.description}
                    </Link>

                    <StyledResponse>
                        <button
                            onClick={() => {
                                onShowReplyModal?.(item)
                            }}
                            className="response reply"
                        >
                            <Comment />
                            <span className="reply-count">{item.repliedCount}</span>
                        </button>
                        <button
                            onClick={()=>{
                                onLikeToggle(item.id)}
                            }
                            className="response like"
                        >
                            {item.isLike ? <Liked /> : <Like />}
                            <span className="like-count">{item.likedCount}</span>
                        </button>
                    </StyledResponse>
                </div>
            </div>
        </StyledTweetItem>
    )
}

export default TweetItem
export{ StyledTweetItem as TweetItem }