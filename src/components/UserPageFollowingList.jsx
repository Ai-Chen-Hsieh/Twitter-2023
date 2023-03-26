import { useParams } from "react-router-dom"
import { UserHeader, TabList, TabItem } from "components"
import FollowingList from "./FollowingList";

/**
 * [前台] 使用者資料頁（正在追隨）
 * @returns 
 */
const UserFollowingList = () => {
    const { user_id } = useParams();

    return (
        <>
            <UserHeader
                name="anna"
                tweetCount={10}
            />
            <TabList>
                <TabItem to={`/user/${user_id}/follower`} text="追隨者" />
                <TabItem to={`/user/${user_id}/following`} text="正在追隨" />
            </TabList>
            <FollowingList/>
        </>
    )
}

export default UserFollowingList