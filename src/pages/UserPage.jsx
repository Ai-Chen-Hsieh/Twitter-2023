import { useParams } from "react-router-dom"
import { UserHeader, TabList, TabItem, UserProfile } from "components"
import { TweetList } from "components";
//測試假資料
import { dummyUserTweets } from "../testData/dummyUserTweets";
import { dummyUserProfile } from "../testData/dummyUserProfile";

/**
 * [前台] 使用者資料頁（推文）
 * @returns 
 */
const UserPage = () => {
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
            <TweetList allTweets={dummyUserTweets}/>
        </>
    )
}

export default UserPage