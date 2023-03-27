import { useParams } from "react-router-dom"
import { UserHeader, TabList, TabItem, UserProfile } from "components"
import { TweetList } from "components";
//測試假資料
import { dummyUserTweets } from "../testData/dummyUserTweets";

/**
 * [前台] 使用者資料頁（推文）
 * @returns 
 */
const UserPage = () => {
    const { user_id } = useParams();

    return (
        <>
            <UserHeader
                name="anna"
                tweetCount={10}
            />
            <UserProfile />
            <TabList>
                <TabItem to={`/user/${user_id}`} text="推文" />
                <TabItem to={`/user/${user_id}/reply`} text="回覆" />
                <TabItem to={`/user/${user_id}/like`} text="喜歡的內容" />
            </TabList>
            <TweetList allTweets={dummyUserTweets}/>
        </>
    )
}

export default UserPage