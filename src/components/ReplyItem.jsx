//後端Api回覆資料待確認

import styled from "styled-components"
import { Avatar } from "."

const StyledListItem = styled.div`
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
    }
    .reply{
        font-size: 1.4rem;
        font-weight: 500;
        line-height: 2.2rem;
        color:var(--secondary);
    }
    .tagged{
        color: var(--main);
    }
`

const ReplyItem = ({item}) => {
    return (
        <StyledListItem>
            <div className="post-section">
                <div className="avatar">
                    <Avatar imageUrl={item.replyAvatar} />
                </div>
                <div className="post-item">
                    <div className="account-info">
                        <span className="name">{item.replyName}</span>
                        <span className="account">@{item.replyAccount} · {item.createdAt}</span>
                    </div>
                    <span className="reply">回覆 <span className="tagged">@{item.tweetAuthorAccount}</span></span>
                    <div className="content">{item.comment}</div>
                </div>
            </div>
        </StyledListItem>
    )
}

export default ReplyItem