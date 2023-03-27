import { useParams } from "react-router-dom"
import { UserHeader, TabList, TabItem, ReplyList } from "components"
//測試假資料
import { dummyUserRepliedTweets } from "../testData/dummyUserRepliedTweets";
/**
 * [前台] 使用者資料頁（回復）
 * @returns 
 */
const UserPageReplyList = () => {
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
            <p>UserPageReplyList.jsx</p>
            <ReplyList repliedList={dummyUserRepliedTweets}/>
        </>
    )
}

export default UserPageReplyList