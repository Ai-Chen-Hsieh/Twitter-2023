import styled from "styled-components"
import { ACLogo } from "assets/images"
import { LogOutIcon } from "assets/images"

const StyledSideBarContainer = styled.div`
    position: relative;
    padding-bottom: 62px;
    min-height: 100vh;
    max-width: 178px;
`

const StyledLogOutButtonContainer = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
`

const StyledLogOutButton = styled.button`
    position: relative;
    display: block;
    width: 100%;
    border: none;
    outline: none;
    padding: 16px 16px 16px 44px;
    background-color: transparent;
    font-size: 1.8rem;
    color: var(--dark-90);
    font-weight: 700;
    cursor: pointer;
    transition: color .5s;
    text-align: left;

    svg {
        path {
            transition: fill .5s;
        }
    }

    &:hover {
        color: var(--main);
    }

    &:hover svg {
        path {
            fill: var(--main)
        }
    }
`

const StyledIconContainer = styled.span`
  display: block;
  position: absolute;
  top: 50%;
  left: 4px;
  transform: translateY(-50%);
  width: 24px;
  text-align: center;
`


/**
 * 側邊欄
 * @param {jsx} children - 內容
 * @param {function} logOutButtonOnClick - 處理登出按鈕 Click 事件
 * @returns 
 */
const SideBar = ({ children, logOutButtonOnClick }) => {
    return (
        <StyledSideBarContainer>
            <ACLogo className="mt-2"/>
            
            { children }

            <StyledLogOutButtonContainer>
                <StyledLogOutButton
                    type="button"
                    title="登出"
                    aria-label="登出"
                    onClick={() => {logOutButtonOnClick?.()}}
                >
                    <StyledIconContainer><LogOutIcon /></StyledIconContainer>
                    <span>登出</span>
                </StyledLogOutButton>
            </StyledLogOutButtonContainer>
        </StyledSideBarContainer>
    )
}

export default SideBar