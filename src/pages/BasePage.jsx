import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { PopularList } from "../components";

/**
 * [前台] 放置前台所有頁面（不包含前台登入頁、註冊頁）共用 Component
 * @param {boolean} showPopularList - 是否顯示推薦跟隨列表（預設：true）
 * @returns 
 */
const BasePage = ({showPopularList = true}) => {
  const location = useLocation();
  return (
    <div className="container">
      <div className="row">
        <div className="col-3">
          <p>路徑: {location.pathname} (BasicPage.jsx)</p>
          <p>sideBar.jsx (BasicPage.jsx)</p>
        </div>
        <div className="col-6">
          <Outlet />
        </div>
        <div className="col-3">
          { showPopularList && <PopularList /> }

        </div>
      </div>
    </div>
  );
}

export default BasePage;