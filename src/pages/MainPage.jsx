import { Header } from "components"
//測試假資料
import { dummyAllTweet } from "../testData/dummyAllTweet"

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
            <TweetList allTweets = {dummyAllTweet}/>
        </>
    )
}

export default MainPage