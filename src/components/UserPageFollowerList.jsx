import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { UserHeader, TabList, TabItem, FollowList } from "components"
import { getUserInfo } from "../api/api_userPageInfo"
import { getFollower } from "api/api_folllow"
import { addFollowing, cancelFollowing } from "api/api_followShip"


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
                //成功取得回覆，則更新 userFollowerList；否則return
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


     // 追蹤，取消追蹤
     function handleFollow(id) {
        const currentItem = userFollowerList.find(user => user.followId === id)
        // 判斷 isFollowing 是否為true，若 true 則執行cancel following
        if(currentItem.isFollowing) {
            const cancelFollowingAsync = async(id)=>{
              try{
                const cancelResponse = await cancelFollowing(id)
                // 成功取消則更新 userFollowerList, 否則return
                if (cancelResponse.status ===200){
                    setUserFollowerList((prevUser) => {
                     return prevUser.map((user) => {
                        if(user.followId ===  id) {
                          return {
                               ...user,
                             isFollowing: !currentItem.isFollowing
                             }
                          }
                          return user
                        })
                    })
              } else {
                  return
                }
              }catch(error){
                console.error(error)
              }
            }
            cancelFollowingAsync(id)
            // 若isFollowing 為false, 則執行 add following
        } else {
            const addFollowingAsync =async(id) => {
                try {
                    const addResponse = await addFollowing(id)
                    // 若成功追蹤，則更新 UserFollowerList
                    if(addResponse.status === 200){
                    setUserFollowerList((prevUser) => {
                     return prevUser.map((user) => {
                        if(user.followId ===  id) {
                          return {
                             ...user,
                             isFollowing: !currentItem.isFollowing
                             }
                          }
                          return user
                        })
                    })
                } else {
                    return
                    }

                }catch(error) {
                    console.error(error)
                }
            }
            addFollowingAsync(id)    
        }     
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

