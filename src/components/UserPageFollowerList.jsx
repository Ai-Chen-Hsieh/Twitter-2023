import { useParams } from "react-router-dom"
import { UserHeader, TabList, TabItem, FollowerList } from "components"

/**
 * [前台] 使用者資料頁（追隨者）
 * @returns 
 */
const UserPageFollowerList = () => {
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
          <FollowerList />
        </>
    )
}

export default UserPageFollowerList