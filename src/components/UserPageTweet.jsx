/**
 * [前台] 推文回覆列表頁
 * @returns 
 */
//試串假資料
import styled from "styled-components"
import { dummyTweetReplies } from "../testData/dummyTweetReplies"
import { ReplyList, Tweet } from "."
import { Link } from "react-router-dom"
import { HeaderContainer } from "./common/header.styled"
//測試假資料
import { dummyTweet } from "../testData/dummyTweet"
//測試使用者假資料
import { dummyUser } from "../testData/dummyUser"
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
                tweet={dummyTweet}
                userInfo={dummyUser}
            />
            <ReplyList repliedList={dummyTweetReplies}/>
        </StyledContainer>
    )
}

export default UserPageTweet