import { useParams } from "react-router-dom"
import { UserHeader, TabList, TabItem, FollowList } from "components"
import { dummyFollowings } from "testData/dummyFollowings"
import { useState } from "react"


/**
 * [前台] 使用者資料頁（正在追隨）
 * @returns 
 */
const UserFollowingList = () => {
    const { user_id } = useParams();
    const [users, setUsers] = useState(dummyFollowings)
       
    function handleFollow( followingId) {
        setUsers((users) => {
            return users.map((user) => {
              if(user.followingId ===  followingId) {
                return {
                 ...user,
                 isFollowed: !user.isFollowed
                }
              }
              return user
            })
        }) 
    }

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
            <FollowList users={users} onToggleFollow={handleFollow}/>
        </>
    )
}

export default UserFollowingList

