import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { useParams } from "react-router-dom"
import { UserHeader, TabList, TabItem, ReplyList, UserProfile, UserEditModal } from "components"
import { getUserInfo } from "../api/api_userPageInfo";
import { getUserReply } from "../api/api_userPageReply";
import { addFollowing, cancelFollowing } from "../api/api_followShip";
/**
 * [前台] 使用者資料頁（回復）
 * @returns 
 */


const UserPageReplyList = () => {
    const [ userInfo, setUserInfo ] = useState('')
    const [ userReplyList, setUserReplyList ] = useState('')
    const [ showUserEditModal, setShowUserEditModal ] = useState(false)
    const { user_id } = useParams();

    //editModal資料 
    const userProfileInfo = {
        name: userInfo.name,
        avatar: userInfo.avatar,
        cover: userInfo.cover,
        introduction: userInfo.introduction
    }
    
    //處理追蹤使用者
    function handleFollowing (id) {
        console.log(id)
        //新增追蹤者
        const addFollowingAsync = async () => {
            const response = await addFollowing(id)
            console.log(response)
            //成功追蹤
            if(response.status === 200){
                setUserInfo((prevUserInfo)=>{
                    return{
                        ...prevUserInfo,
                        isFollowing: !prevUserInfo.isFollowing
                    }
                })
            }else{
                return
            }
        }
        //取消追蹤
        const cancelFollowingAsync = async () => {
            const response = await cancelFollowing(id)
            //成功取消
            if(response.status === 200){
                setUserInfo((prevUserInfo)=>{
                    return{
                        ...prevUserInfo,
                        isFollowing: !prevUserInfo.isFollowing
                    }
                })
            }else{
                return
            }
        
        }
        //判斷是否追蹤
        if(userInfo.isFollowing){
            cancelFollowingAsync()
        } else {
            addFollowingAsync()
        }
    }

    //顯示編輯視窗
    function handleShowEditModal(){
        setShowUserEditModal(true)
    }

    //處理更新使用者資料
    function handleSaveUserInfo ({saveName, saveIntroduction, saveAvatar, saveCover}){
        setUserInfo((prevInfo)=>{
            return{
                ...prevInfo,
                name: saveName,
                introduction: saveIntroduction,
                cover: saveCover,
                avatar: saveAvatar,
            }
        })
    }

    useEffect(()=>{
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
        //取得使用者回覆過的推文
        const getUserReplyAsync = async () => {
            try{
                const userReplyList = await getUserReply(user_id)
                //成功取得回覆，則更新reply list；否則return
                if (userReplyList.status === 200) {
                    setUserReplyList(()=>{
                        return[
                            ...userReplyList.data
                        ]
                    })
                } else{
                    return
                }
            }catch(error){
                console.error(error)
            }
        }
        getUserInfoAsync()
        getUserReplyAsync()
    },[user_id])

    return (
        <>
            <UserHeader
                name={userInfo.name}
                tweetCount={userInfo.tweetCount}
            />
            <UserProfile
                name={userInfo.name}
                account={userInfo.account}
                description={userInfo.introduction}
                backgroundImageUrl={userInfo.cover}
                imageUrl={userInfo.avatar}
                followingCount={userInfo.followingCount}
                followerCount={userInfo.followerCount}
                isFollowing={userInfo.isFollowing}
                onToggleFollow={handleFollowing}
                onShowEditModal={handleShowEditModal}
            />
            <TabList>
                <TabItem to={`/user/${user_id}`} text="推文" />
                <TabItem to={`/user/${user_id}/reply`} text="回覆" />
                <TabItem to={`/user/${user_id}/like`} text="喜歡的內容" />
            </TabList>

            <ReplyList repliedList={userReplyList}/>
            {/* 編輯個人檔案彈跳視窗 */}

            {showUserEditModal && createPortal(
                <UserEditModal
                    userInfo={userProfileInfo}
                    onSaveUserInfo={handleSaveUserInfo}
                    onClose={() => setShowUserEditModal(false)}
                />,
                document.body
            )}
        </>
    )
}

export default UserPageReplyList