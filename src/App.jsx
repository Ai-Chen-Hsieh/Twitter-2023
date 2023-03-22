import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './reset.css'
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AdminMainPage, AdminPage, AdminUserPage, LoginPage, MainPage, RegisterPage, SettingPage, UserPage, DemoPage, BasePage, AdminBasePage, StyleGuidePage } from 'pages';
import { UserPageLikeList, UserPageFollowingList, UserPageReplyList, UserPageFollowerList, UserPageTweet} from 'components';

function App() {
  const basename = process.env.PUBLIC_URL;

  return (
    <div>
      <BrowserRouter basename={basename}>
        <Routes>
          {/* 前台 */}
          <Route path='login' element={<LoginPage />} />

          <Route path='register' element={<RegisterPage />} />

          <Route path='main' element={<BasePage />} >
            <Route index element={<MainPage />} />
          </Route>

          <Route path='user/:user_id' element={<BasePage />} >
            <Route path=":tweet_id" element={<UserPageTweet />} />
            <Route path="reply" element={<UserPageReplyList />} />
            <Route path="like" element={<UserPageLikeList />} />
            <Route path="follower" element={<UserPageFollowerList />} />
            <Route path="following" element={<UserPageFollowingList />} />
            <Route index element={<UserPage />} />
          </Route>

          <Route path='setting' element={<BasePage showPopularList={false} />} >
            <Route index element={<SettingPage />} />
          </Route>
          
          {/* 後台 */}
          <Route path='admin' element={<AdminPage />} />

          <Route path='admin_main' element={<AdminBasePage />} >
            <Route index element={<AdminMainPage />} />
          </Route>

          <Route path='admin_users' element={<AdminBasePage />} >
            <Route index element={<AdminUserPage />} />
          </Route>

          {/* Demo */}
          <Route path='demo' element={<DemoPage />} />
          <Route path='style_guide' element={<StyleGuidePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
