import { Link } from "react-router-dom"
import styled from "styled-components"
import { HeaderContainer } from "./common/header.styled"

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

const StyledHeaderUserInfos = styled.div`
    width: calc(100% - 64px);
    padding-right: 24px;
`

const StyledHeaderUserTweetCount = styled.p`
    line-height: 1;
    font-size: var(--fz-secondary);
    color: var(--secondary);
`


/**
 * 使用者頁首
 * @param {string} name - 使用者名稱 (預設：'')
 * @param {number} tweetCount - 使用者推文總數 (預設：0)
 * @returns 
 */
const UserHeader = ({name='', tweetCount=0}) => {
    return (
        <HeaderContainer>
            <StyledHeaderLink to="/main" aria-label="回首頁" title="回首頁">
                <StyledHeaderArrow/>
            </StyledHeaderLink>
            <StyledHeaderUserInfos>
                <h5>{name}</h5>
                <StyledHeaderUserTweetCount className="text-fz-secondary color-secondary">
                    {tweetCount} 推文
                </StyledHeaderUserTweetCount>
            </StyledHeaderUserInfos>
        </HeaderContainer>
    )
}

export default UserHeader