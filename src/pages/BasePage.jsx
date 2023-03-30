import { Outlet, useNavigate } from "react-router-dom"
import { PopularList, SideBar, SideBarList, SideBarItem, Button, TweetModal } from "../components"
import { useEffect, useState } from "react"
import { createPortal } from "react-dom";
import { useAuth } from "contexts/AuthContext"
import styled from "styled-components"
// import { getPopularList } from "../api/api_popularlist";
const StyledContainer = styled.div`
  width: 100%;
  max-width: 100%;
  @media screen and (min-width: 992px) {
    margin-left: auto;
    margin-right: auto;
    max-width: 960px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1140px;
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

const StyledPopularListContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: calc(100% - 866px);
`

const StyledMain = styled.div`
  position: relative;
  border-left: 1px solid var(--gray-20);
  border-right: 1px solid var(--gray-20);
  min-height: 200vh;
  width: 100%;
  max-width: 640px;
`

/**
 * [前台] 放置前台所有頁面（不包含前台登入頁、註冊頁）共用 Component
 * @param {boolean} showPopularList - 是否顯示推薦跟隨列表（預設：true）
 * @returns 
 */
const BasePage = ({showPopularList = true}) => {
  const { hasToken, currentRegistrant, logout } = useAuth()
  const [showTweetModal, setShowTweetModal] = useState(false)
  const [lists, setLists] = useState([])
  let navigate = useNavigate()
  
  //引入推薦者清單
// useEffect(()=>{
//   const getPopularListAsync = async () => {
//     try{
//       const response = await getPopularList();
//       //若未成功取得status不等於success，lists useState 保持為空陣列
//       if(response.status === 200){
//         setLists(()=>{
//           return[
//             ...response.data
//           ]
//         });
//       } else {
//         return
//       }
//     }catch(error){
//       console.error(error)
//     }
//   }

//   getPopularListAsync()
// },[])

  // 檢查是否有 token
  // 沒有 -> 登入頁
  // 有 -> (管理者) 後台首頁； (使用者) 留在此頁
  useEffect(() => {
    if (!hasToken) {
      navigate('/login');
    } else if (hasToken && currentRegistrant.role === 'admin') {
      navigate('/admin_main');
    }
  }, [navigate, hasToken, currentRegistrant]);

  function handleLogOut() {
    logout()
  }


  // 避免導到其他頁面看到畫面
  if (!hasToken || (hasToken && currentRegistrant.role === 'admin')) {
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
                <SideBarItem to="/main" text="首頁" icon="home" />
                <SideBarItem to={`/user/${currentRegistrant.id}`} text="個人資料" icon="user" />
                <SideBarItem to="/setting" text="設定" icon="setting" />
              </SideBarList>
              <Button
                display="block" 
                text="推文"
                onClick={()=>{
                  setShowTweetModal(true)
                }}
              />
            </SideBar>
          </StyledStickyContainer>
          
        </StyledSideBarContainer>

        <StyledMain>
          <Outlet />
        </StyledMain>

        <StyledPopularListContainer>
          <StyledStickyContainer>
            { showPopularList && <PopularList recommendUsers={lists} /> }
          </StyledStickyContainer>
        </StyledPopularListContainer>

      </StyledWrap>

      {showTweetModal && createPortal(
        <TweetModal onClose={() => setShowTweetModal(false)}/>,
        document.body
      )}
    </StyledContainer>
  );
}

export default BasePage;