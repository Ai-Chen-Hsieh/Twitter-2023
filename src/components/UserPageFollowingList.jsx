import { useParams } from "react-router-dom"
import { UserHeader, TabList, TabItem, FollowList } from "components"
import { dummyUsers } from "testData/dummyUserInfo"
import { useState } from "react"


/**
 * [前台] 使用者資料頁（正在追隨）
 * @returns 
 */
const UserFollowingList = () => {
    const { user_id } = useParams();
    const [users, setUsers] = useState(dummyUsers)
       
    function handleFollow(id) {
        setUsers((users) => {
            return users.map((user) => {
              if(user.id === id) {
                return {
                 ...user,
                 isFollow: !user.isFollow
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