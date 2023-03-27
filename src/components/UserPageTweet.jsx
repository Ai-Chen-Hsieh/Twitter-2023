/**
 * [前台] 推文回覆列表頁
 * @returns 
 */
//試串假資料
import { dummyTweetReplies } from "../testData/dummyTweetReplies"
import { ReplyList } from "."

const UserPageTweet = () => {
    return (
        <>
            <p>UserPageTweet.jsx</p>
            <ReplyList repliedList={dummyTweetReplies}/>
        </>
    )
}

export default UserPageTweet