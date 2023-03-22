import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

/**
 * [後台] 放置後台所有頁面（不包含後台登入頁） 共用 Component
 * @returns 
 */
const AdminBasePage = () => {
  const location = useLocation();
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <p>路徑: {location.pathname} (AdminBasicPage.jsx)</p>
        </div>
        <div className="col-3">
          <p>sideBar.jsx (AdminBasicPage.jsx)</p>
        </div>
        <div className="col-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminBasePage;