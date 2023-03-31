import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { UserHeader, TabList, TabItem, FollowList } from "components"
// import { dummyFollowings } from "testData/dummyFollowings"
import { getUserInfo } from "../api/api_userPageInfo"
import { getFollower } from "api/api_folllow"


/**
 * [前台] 使用者資料頁（追隨者）
 * @returns 
 */
const UserPageFollowerList = () => {
    const { user_id } = useParams();
    // const [users, setUsers] = useState(dummyFollowings)
    const [ userInfo, setUserInfo ] = useState('')
    const [userFollowerList, setUserFollowerList] = useState('')
       
   
    useEffect(()=> {

        // 取得使用者資訊
        const getUserInfoAsync = async () => {
            try{
                const userInfoResponse = await getUserInfo(user_id)
                if(userInfoResponse.status === 200){
                    setUserInfo(userInfoResponse.data)
                } else {
                    setUserInfo(()=>{
                        return{
                            name: 'not found',
                            tweetCount: 'not found',
                            account: 'not found',
                            description: 'not found',
                            backgroundImageUrl: 'not found',
                            imageUrl:'not found',
                            followingCount: 'not found',
                            followerCount: 'not found',
                        }
                    })
                }
            }catch(error){
                console.error(error)
            }
        }

        // 取得使用者的跟隨者清單
         const getUserFollowerAsync = async () => {
            try{
                const userFollowerList = await getFollower(user_id)
                //成功取得回覆，則更新follower list；否則return
                if (userFollowerList.status === 200) {
                    setUserFollowerList(()=>{
                        return[
                            ...userFollowerList.data
                        ]
                    })
                } else {
                   return
                }
            }catch(error){
                console.error(error)
            }
        }
        getUserInfoAsync()
        getUserFollowerAsync()
    },[user_id])


     function handleFollow(followId) {
         setUserFollowerList((followers) => {
            return followers.map((follower) => {
              if(follower.followId === followId) {
                return {
                 ...follower,
                 isFollowing: !follower.isFollowing
                }
              }
              return follower
            })
        }) 
    }
  
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
          <FollowList followList={userFollowerList} onToggleFollow={handleFollow}/>
        </>
    )
}

export default UserPageFollowerList

