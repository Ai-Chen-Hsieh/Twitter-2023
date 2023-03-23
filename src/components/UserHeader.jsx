import styled from "styled-components"
import { HeaderContainer } from "./common/header.styled"

const StyledHeader = styled.header`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`


/**
 * 使用者頁首
 * @param {string} name - 使用者名稱
 * @param {string} name - 使用者推文總數 
 * @returns 
 */
const UserHeader = ({name='', tweetCount=0}) => {
    return (
        <HeaderContainer>
            <StyledHeader>

                <h5>{name}</h5>
                <p className="fz-secondary color-secondary">{tweetCount} 推文</p>
            </StyledHeader>
        </HeaderContainer>
    )
}

export default UserHeader