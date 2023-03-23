import { HeaderContainer } from "./common/header.styled"

/**
 * 頁首
 * @param {string} text - 頁首標題文字 
 * @returns 
 */
const Header = ({text=""}) => {
    return(
        <HeaderContainer>
            <h4>{text}</h4>
        </HeaderContainer>
    )
}

export default Header