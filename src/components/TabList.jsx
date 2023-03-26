import styled from "styled-components"

const StyledTabListContainer = styled.ul`
    display: flex;
    border-bottom: 1px solid var(--gray-20);
`

/**
 * 頁籤列
 * @param {jsx} children 內容
 * @returns 
 */
const TabList = ({ children }) => {
    return (
        <StyledTabListContainer>
            { children }
        </StyledTabListContainer>
    )
}

export default TabList