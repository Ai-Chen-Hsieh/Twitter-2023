import { useParams } from "react-router-dom"
import { UserHeader, TabList, TabItem, TweetList } from "components"
//測試假資料
import { dummyUserLikedTweets } from "../testData/dummyUserLikedTweet";

/**
 * [前台] 使用者資料頁（喜歡的內容）
 * @returns 
 */
const UserPageLikeList = () => {
    const { user_id } = useParams();

    return (
        <>
            <UserHeader
                name="anna"
                tweetCount={10}
            />
            <TabList>
                <TabItem to={`/user/${user_id}`} text="推文" />
                <TabItem to={`/user/${user_id}/reply`} text="回覆" />
                <TabItem to={`/user/${user_id}/like`} text="喜歡的內容" />
            </TabList>
            <p>UserPageLikeList.jsx</p>
            <TweetList allTweets={dummyUserLikedTweets}/>
        </>
    )
}

export default UserPageLikeList