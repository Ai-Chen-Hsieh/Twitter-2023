import styled from "styled-components"
import { HeaderContainer } from "./common/header.styled"

const StyledHeaderTitle = styled.h4`
    padding-left: 24px;
    padding-right: 24px;
`

/**
 * 頁首
 * @param {string} text - 頁首標題 (預設：'')
 * @returns 
 */
const Header = ({text=''}) => {
    return(
        <HeaderContainer>
            <StyledHeaderTitle>{text}</StyledHeaderTitle>
        </HeaderContainer>
    )
}

export default Header