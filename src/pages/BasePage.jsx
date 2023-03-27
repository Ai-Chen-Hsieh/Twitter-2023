import { Outlet, useNavigate } from "react-router-dom"
import { PopularList, SideBar, SideBarList, SideBarItem, Button } from "../components"
import { useEffect } from "react"
import { useAuth } from "contexts/AuthContext"
import { dummyUsers } from "../testData/dummyRecommendUser";

/**
 * [前台] 放置前台所有頁面（不包含前台登入頁、註冊頁）共用 Component
 * @param {boolean} showPopularList - 是否顯示推薦跟隨列表（預設：true）
 * @returns 
 */
const BasePage = ({showPopularList = true}) => {
  const { hasToken, currentRegistrant, logout } = useAuth()
  let navigate = useNavigate()

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
    <div className="container">
      <div className="row">
        <div className="col-3">
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
            />
          </SideBar>
        </div>
        <div className="col-6">
          <Outlet />
        </div>
        <div className="col-3">
          { showPopularList && <PopularList recommendUsers={dummyUsers} /> }
        </div>
      </div>
    </div>
  );
}

export default BasePage;