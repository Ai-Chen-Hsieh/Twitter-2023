import { Outlet } from "react-router-dom";
import { SideBar, SideBarList, SideBarItem } from "components";
/**
 * [後台] 放置後台所有頁面（不包含後台登入頁） 共用 Component
 * @returns 
 */
const AdminBasePage = () => {
  function handleLogOut() {
    console.log('log out.');
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
        <div className="col-9">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminBasePage;