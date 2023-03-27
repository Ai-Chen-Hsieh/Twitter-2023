import { Outlet } from "react-router-dom";
import { PopularList, SideBar, SideBarList, SideBarItem, Button } from "../components";
//測試假資料
import { dummyUsers } from "../testData/dummyRecommendUser";
/**
 * [前台] 放置前台所有頁面（不包含前台登入頁、註冊頁）共用 Component
 * @param {boolean} showPopularList - 是否顯示推薦跟隨列表（預設：true）
 * @returns 
 */
const BasePage = ({showPopularList = true}) => {

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
              <SideBarItem to="/main" text="首頁" icon="home" />
              <SideBarItem to="/user/000" text="個人資料" icon="user" />
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