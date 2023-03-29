import { useParams } from "react-router-dom"
import { UserHeader, TabList, TabItem, ReplyList, UserProfile } from "components"
//測試假資料
import { dummyUserRepliedTweets } from "../testData/dummyUserRepliedTweets";
import { dummyUserProfile } from "testData/dummyUserProfile";

/**
 * [前台] 使用者資料頁（回復）
 * @returns 
 */
const UserPageReplyList = () => {
    const userProfile = dummyUserProfile
    const { user_id } = useParams();

    return (
        <>
            <UserHeader
                name="anna"
                tweetCount={10}
            />
            <UserProfile
                name={userProfile.name}
                account={userProfile.account}
                description={userProfile.introduction}
                backgroundImageUrl={userProfile.cover}
                imageUrl={userProfile.avatar}
                followingCount={userProfile.followingCount}
                followerCount={userProfile.followerCount}
            />
            <TabList>
                <TabItem to={`/user/${user_id}`} text="推文" />
                <TabItem to={`/user/${user_id}/reply`} text="回覆" />
                <TabItem to={`/user/${user_id}/like`} text="喜歡的內容" />
            </TabList>
            <ReplyList repliedList={dummyUserRepliedTweets}/>
        </>
    )
}

export default UserPageReplyList