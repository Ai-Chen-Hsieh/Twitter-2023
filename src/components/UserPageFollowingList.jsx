import { useParams } from "react-router-dom"
import { UserHeader, TabList, TabItem, FollowList } from "components"
import { useState, useEffect } from "react"
import { getUserInfo } from "../api/api_userPageInfo"
import { getFollowing } from "api/api_folllow"
import { addFollowing, cancelFollowing } from "api/api_followShip"
import { useAuth } from "contexts/AuthContext"


/**
 * [前台] 使用者資料頁（正在追隨）
 * @returns 
 */
const UserPageFollowingList = () => {
    const { user_id } = useParams();
    // const [users, setUsers] = useState(dummyFollowings)
    const [ userInfo, setUserInfo ] = useState('')
    const [userFollowingList, setUserFollowingList] = useState('')
    const {currentRegistrant} = useAuth()
    
    useEffect(()=>{
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

         // 取得使用者的跟隨中清單
         const getUserFollowingAsync = async () => {
            try{
                const userFollowingList = await getFollowing(user_id)
                //成功取得回覆，則更新 userFollowingList；否則return
                if (userFollowingList.status === 200) {
                    setUserFollowingList(()=>{
                        return[
                            ...userFollowingList.data
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
        getUserFollowingAsync()
    },[user_id])

    // 追蹤，取消追蹤
    function handleFollow(id) {
        const isCurrentRegistrant = (currentRegistrant.id.toString() === user_id)? true:false 
        const currentItem = userFollowingList.find(user => user.followId === id)

        // 判斷 isFollowing 是否為true，若 true 則執行cancel following
        if(currentItem.isFollowing) {
            const cancelFollowingAsync = async(id)=>{
              try{
                const cancelResponse = await cancelFollowing(id)
                // 成功取消則更新 userFollowingList, 否則return
                if (cancelResponse.status ===200){
                     // 如果是登入者本人，按取消追隨後讓該項被點擊的追隨中項目從追隨中清單消失
                    if(isCurrentRegistrant) {
                        setUserFollowingList((prevUser)=>{
                            return prevUser.filter((user)=>{
                                return user.followId !== id
                            })
                        })
                    } else {
                        setUserFollowingList((prevUser) => {
                              return prevUser.map((user) => {
                        if(user.followId ===  id) {
                          return {
                               ...user,
                             isFollowing: !currentItem.isFollowing,
                             followCount: currentItem.followCount - 1
                             }
                          }
                          return user
                        })
                    })
                }
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
                    // 若成功追蹤，則更新 UserFollowingList
                    if(addResponse.status === 200){
                    setUserFollowingList((prevUser) => {
                     return prevUser.map((user) => {
                        if(user.followId ===  id) {
                          return {
                             ...user,
                             isFollowing: !currentItem.isFollowing,
                             followCount: currentItem.followCount + 1
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
            <FollowList followList={userFollowingList} onToggleFollow={handleFollow}/>
        </>
    )
}

export default UserPageFollowingList

