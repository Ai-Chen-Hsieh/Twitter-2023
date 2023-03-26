import { useEffect } from "react"
import { Outlet, useNavigate } from "react-router-dom"
import { SideBar, SideBarList, SideBarItem } from "components"
import { useAuth } from "contexts/AuthContext"
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
      navigate('/login')

    } else {
      if (currentRegistrant.role !== 'admin') {
        navigate('/main')
      }
    }
  }, [navigate, hasToken, currentRegistrant])


  function handleLogOut() {
    logout()
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <SideBar
            logOutButtonOnClick={handleLogOut}
          >
            <SideBarList>
              <SideBarItem to="/admin_main" text="推文清單" icon="home" />
              <SideBarItem to="/admin_users" text="使用者列表" icon="user" />
            </SideBarList>
          </SideBar>
        </div>
        <div className="col-6">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default AdminBasePage