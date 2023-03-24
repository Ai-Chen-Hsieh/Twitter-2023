import { NavLink } from "react-router-dom"
import styled from "styled-components"

const StyledTabItemNavLink = styled(NavLink)`
    display: block;
    padding: 12px;
    min-width: 90px;
    max-width: 100%;
    font-weight: 700;
    text-decoration: none;
    text-align: center;
    color: var(--gray-100);
    transition: color .5s;
    &:hover,
    &.active {
        color: var(--main);
    }
    &.active {
        border-bottom: 2px solid var(--main);
        cursor: default;
    }

    @media screen and (min-width: 1200px){
        padding: 16px;
        min-width: 130px;
    }
`

/**
 * 頁籤項目
 * @param {string} to - 連結
 * @param {string} text - 連結文字 
 * @returns 
 */
const TabItem = ({to, text}) => {
    return (
        <li>
            <StyledTabItemNavLink to={to} aria-label={text} title={text} end={true} >
                {text}
            </StyledTabItemNavLink>
        </li>
    )
}

export default TabItem