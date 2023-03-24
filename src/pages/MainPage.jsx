import { Header } from "components"

/**
 * [前台] 首頁
 * @returns 
 */

import { TweetList } from "components"

const MainPage = () => {
    return (
        <>
            <Header text="首頁" />
            <p>MainPage.jsx</p>
            <TweetList/>
        </>
    )
}

export default MainPage