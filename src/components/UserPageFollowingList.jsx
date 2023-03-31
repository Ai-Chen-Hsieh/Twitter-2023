import { useParams } from "react-router-dom"
import { UserHeader, TabList, TabItem, FollowList } from "components"
// import { dummyFollowings } from "testData/dummyFollowings"
import { useState, useEffect } from "react"
import { getUserInfo } from "../api/api_userPageInfo"
import { getFollowing } from "api/api_folllow"


/**
 * [前台] 使用者資料頁（正在追隨）
 * @returns 
 */
const UserPageFollowingList = () => {
    const { user_id } = useParams();
    // const [users, setUsers] = useState(dummyFollowings)
    const [ userInfo, setUserInfo ] = useState('')
    const [userFollowingList, setUserFollowingList] = useState('')
    
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

         // 取得使用者的跟隨者清單
         const getUserFollowingAsync = async () => {
            try{
                const userFollowingList = await getFollowing(user_id)
                //成功取得回覆，則更新follower list；否則return
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


    function handleFollow(followingId) {
        setUserFollowingList((followings) => {
            return followings.map((following) => {
              if(following.followingId ===  followingId) {
                return {
                 ...following,
                 isFollowing: !following.isFollowing
                }
              }
              return following
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
            <FollowList followList={userFollowingList} onToggleFollow={handleFollow}/>
        </>
    )
}

export default UserPageFollowingList

