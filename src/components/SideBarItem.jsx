import { NavLink } from "react-router-dom"
import { HomeIcon, UserIcon, SettingIcon } from "assets/images"
import styled from "styled-components"

const StyledHomeIcon = styled(HomeIcon)`
  width: 21px;
`

const StyledUserIcon = styled(UserIcon)`
  width: 17px;
`

const StyledSettingIcon = styled(SettingIcon)`
  width: 20px;
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

const StyledItemNavLink = styled(NavLink)`
  position: relative;
  display: block;
  padding: 16px 16px 16px 44px;
  text-decoration: none;
  color: var(--dark-90);
  font-size: 1.8rem;
  font-weight: 700;
  transition: color .5s;

  svg {
    path {
        transition: fill .5s;
    }
    #line path {
      fill: var(--dark-90);
    }
    #fill path {
      fill: transparent;
    }
  }

  &:hover,
  &.active {
    color: var(--main);

    svg {
      #line path {
        fill: transparent;
      }
      #fill path {
        fill: var(--main);
      }
    }
  }

  &:hover ${StyledUserIcon},
  &.active ${StyledUserIcon} {
    #line path {
      fill: var(--main);
    }
  }
`


/**
 * 側邊欄項目
 * @param {string} to - 連結
 * @param {string} icon - icon 類型
 * @param {string} text - 連結文字
 * @returns 
 */
const SideBarItem = ({ to, icon, text }) => {
  let Icon = <StyledHomeIcon/>

  switch (icon) {
    case 'user':
      Icon = <StyledUserIcon/>
      break;

    case 'setting':
      Icon = <StyledSettingIcon/>
      break;
  
    default:
      Icon = <StyledHomeIcon/>
      break;
  }

  return (
    <li>
      <StyledItemNavLink to={to} title={text} aria-label={text}>
        <StyledIconContainer>{Icon}</StyledIconContainer>
        <span>{ text }</span>
      </StyledItemNavLink>
    </li>
  )
}

export default SideBarItem