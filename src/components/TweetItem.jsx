import styled from "styled-components"
import { Avatar } from "."
import { ReactComponent as Comment } from "assets/images/comment.svg"
import { ReactComponent as Like } from "assets/images/like.svg"

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
    return (
        <StyledTweetItem>
            <div className="post-section">
                <div className="avatar">
                    <Avatar 
                        imageUrl="https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"
                    />
                </div>
                <div className="post-item">
                    <div className="account-info">
                        <span className="name">pizza hut</span>
                        <span className="account">@pizza hut · 3小時</span>
                    </div>
                    <div className="content">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</div>
                    <div className="response-section">
                        <span className="comment response">
                            <Comment />
                            <span className="comment-count">2</span>
                        </span>
                        <span className="like response">
                            <Like fill="black"/>
                            <span className="like-count">2</span>
                        </span>

                    </div>
                </div>
            </div>
        </StyledTweetItem>
    )
}

export default TweetItem