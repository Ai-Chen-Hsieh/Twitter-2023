import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { SideBar, SideBarList, SideBarItem } from "components"
import { useAuth } from "contexts/AuthContext"
import styled from "styled-components"

const StyledContainer = styled.div`
  width: 100%;
  max-width: 100%;
  @media screen and (min-width: 992px) {
    margin-left: auto;
    max-width: 960px;
  }
  @media screen and (min-width: 1200px) {
    max-width: calc(1140px + (50% - 570px));
  }
`

const StyledWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const StyledStickyContainer = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 16px;
`

const StyledSideBarContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 178px;
`

const StyledMain = styled.div`
  position: relative;
  border-left: 1px solid var(--gray-20);
  min-height: 200vh;
  width: 100%;
  max-width: calc(100% - 202px);
`

/**
 * [後台] 放置後台所有頁面（不包含後台登入頁） 共用 Component
 * @returns 
 */
const AdminBasePage = () => {
  const { hasToken, currentRegistrant, logout } = useAuth()
  let navigate = useNavigate()

  // 檢查是否有 token
  // 沒有 -> 登入頁
  // 有 -> (管理者) 留在此頁； (使用者) 導到首頁
  useEffect(() => {
    if (!hasToken) {
      navigate('/admin');
    } else if (hasToken && currentRegistrant.role !== 'admin') {
      navigate('/main');
    }
  }, [navigate, hasToken, currentRegistrant]);


  function handleLogOut() {
    logout()
  }

  // 避免導到其他頁面看到畫面
  if (!hasToken || (hasToken && currentRegistrant.role !== 'admin')) {
    return (
      <></>
    )
  }

  return (
    <StyledContainer>
      <StyledWrap>
        <StyledSideBarContainer>
          <StyledStickyContainer>
            <SideBar
              logOutButtonOnClick={handleLogOut}
            >
              <SideBarList>
                <SideBarItem to="/admin_main" text="推文清單" icon="home" />
                <SideBarItem to="/admin_users" text="使用者列表" icon="user" />
              </SideBarList>
            </SideBar>
          </StyledStickyContainer>
        </StyledSideBarContainer>

        <StyledMain>
          <Outlet />
        </StyledMain>

      </StyledWrap>
    </StyledContainer>
  )
}

export default AdminBasePage