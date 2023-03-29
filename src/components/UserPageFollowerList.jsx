import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { UserHeader, TabList, TabItem, FollowList } from "components"
import { dummyFollowings } from "testData/dummyFollowings"
import { getUserInfo } from "../api/api_userPage"


/**
 * [前台] 使用者資料頁（追隨者）
 * @returns 
 */
const UserPageFollowerList = () => {
    const { user_id } = useParams();
    const [users, setUsers] = useState(dummyFollowings)
    const [ userInfo, setUserInfo ] = useState('')
       
    function handleFollow(followingId) {
        setUsers((users) => {
            return users.map((user) => {
              if(user.followingId === followingId) {
                return {
                 ...user,
                 isFollowed: !user.isFollowed
                }
              }
              return user
            })
        }) 
    }

    useEffect(()=>{
        const getUserInfoAsync = async () => {
            try{
                const userInfo = await getUserInfo(user_id)
                setUserInfo(userInfo)
            }catch(error){
                console.error(error)
            }
        } 
        getUserInfoAsync()
    },[user_id])
  
    return (
        <>
            <UserHeader
                name={userInfo.name}
                tweetCount={userInfo.tweetCount}
            />
            <TabList>
                <TabItem to={`/user/${user_id}/follower`} text="追隨者" />
                <TabItem to={`/user/${user_id}/following`} text="正在追隨" />
            </TabList>
          <FollowList users={users} onToggleFollow={handleFollow}/>
        </>
    )
}

export default UserPageFollowerList