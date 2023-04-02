# Twitter-2023
專案：https://ai-chen-hsieh.github.io/Twitter-2023/login

### Route 設定
**前台**
- /login - 登入頁面。
- /register - 註冊頁面。
- /main - 首頁。
- /user/:user_id - 使用者發過的推文列表頁。
- /user/:user_id/reply - 使用者回覆過的推文列表頁。
- /user/:user_id/like - 使用者收藏的推文列表頁。
- /user/:user_id/follower - 使用者追隨者列表頁。
- /user/:user_id/following - 使用者正在追隨列表頁。
- /user/:user_id/:tweet_id - 某則推文的回覆列表頁。
- /setting - 設定頁。

**後台**
- /admin - 後台登入頁。
- /admin_main - 管理前台推文頁。
- /admin_users - 檢視前台使用者頁。

### User Story
**前台（使用者）：**
- 除了註冊和登入頁，使用者一定要登入才能使用網站。當使用者尚未註冊便試圖登入時，會有錯誤提示。
- 註冊時，使用者可以設定帳號（必須是獨一無二的）、名稱（上限 50 字）、email 和 密碼。
- 使用者可以在設定頁編輯帳號（必須是獨一無二的）、名稱（上限 50 字）、email 和 密碼。
- 當使用者在註冊／編輯帳號和 email 不能與其他人重複，若有重複會跳出錯誤提示。
- 使用者能編輯自己的名稱、自我介紹、個人頭像與封面。
- 使用者能在首頁瀏覽所有的推文（所有 Tweets 依 create 日期排序，最新的在前）。
- 使用者點擊推文內容時，能查看該貼文內容與回覆串。
- 使用者能回覆別人的推文。
- 點擊推文中使用者頭像時，能瀏覽該使用者的個人資料及推文。
- 使用者能新增推文（字數限制在 140 以內、推文不能為空白）。
- 使用者可以追蹤/取消追蹤其他使用者。
- 使用者可以收藏/取消收藏推文。
- 任何登入使用者都可以瀏覽特定使用者的以下資料：
    - 推文 (Tweets)：排序依日期，最新的在前。
    - 推文與回覆：使用者回覆過的內容，排序依日期，最新的在前。
    - 跟隨中 (Following)：該使用者的關注清單，排序依照追蹤紀錄成立的時間，愈新的在愈前面。
    - 跟隨者 (Follower)：該使用者的跟隨者清單，排序依照追蹤紀錄成立的時間，愈新的在愈前面。
    - 喜歡的內容 (Like)：該使用者收藏過的推文清單，排序依收藏紀錄成立的時間，愈新的在愈前面。
- 使用者能在首頁的側邊欄，看見跟隨者 (followers) 數量排列前 10 的推薦跟隨名單。

**後台（管理者）：**
- 管理者可從專門的後台登入頁面進入網站後台。
- 管理者可以瀏覽全站的推文清單，在清單上可以快覽推文的前 50 個字。
- 管理者可以在清單上直接刪除任何人的推文。
- 管理者可以瀏覽站內所有的使用者清單（使用者清單預設按推文數排序，由多至少）。

**若使用管理帳號登入前台，或使用一般使用者帳號登入後台，等同於「帳號不存在」**

---
### Environment - 環境建置
1.nvm(Windows)

[nvm-windows](https://github.com/coreybutler/nvm-windows/releases)，點擊`nvm-setup.zip`下載安裝。開啟終端機(Terminal)，輸入下述指令以確定安裝成功。
```
nvm version
```

2.Node.js

開啟終端機(Terminal)，輸入下述指令查看可安裝的Node.js的版本。下載並使用Node.js，這裡下載14.18.1版本。
```
nvm list available
nvm install 14.18.1
nvm use 14.18.1
```

---
### Installing - 專案建置
1.開啟終端機(Terminal)，Clone 此專案至本機電腦。
```
git clone https://github.com/Ai-Chen-Hsieh/Twitter-2023.git
```

2.進入專案資料夾。
```
cd [專案資料夾]
```

3.下載相關套件。
```
npm install
```

4.啟動專案，有順利自動開啟 http://localhost:3000/Twitter-2023 看到畫面及安裝成功。
```
npm start
```

---
### Contributor - 開發人員
**Back-end**
- [Emily](https://github.com/yy933)
- [Abbie](https://github.com/abbie930)

**Front-end**
- [Anna](https://github.com/b10332040)
- [Evan](https://github.com/Ai-Chen-Hsieh)
- [Tammy](https://github.com/TammyKao)

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
