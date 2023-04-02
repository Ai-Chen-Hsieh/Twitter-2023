import { Outlet, useNavigate } from "react-router-dom"
import { PopularList, SideBar, SideBarList, SideBarItem, Button, TweetModal } from "../components"
import { useEffect, useState } from "react"
import { createPortal } from "react-dom";
import { useAuth } from "contexts/AuthContext"
import styled from "styled-components"
import Swal from "sweetalert2";
/**資料串接 */
import { getPopularList } from "../api/api_popularlist";
import { addFollowing, cancelFollowing } from "../api/api_followShip";
import { addTweet } from "api/tweets";

const StyledContainer = styled.div`
  width: 100%;
  max-width: 100%;
  @media screen and (min-width: 992px) {
    margin-left: auto;
    margin-right: auto;
    max-width: 960px;
  }
  @media screen and (min-width: 1200px) {
    max-width: 1140px;
  }
`

const StyledWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const StyledStickyContainer = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 16px;
`

const StyledSideBarContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 178px;
`

const StyledPopularListContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: calc(100% - 866px);
`

const StyledMain = styled.div`
  position: relative;
  border-left: 1px solid var(--gray-20);
  border-right: 1px solid var(--gray-20);
  min-height: 110vh;
  width: 100%;
  max-width: 640px;
`

/**
 * [前台] 放置前台所有頁面（不包含前台登入頁、註冊頁）共用 Component
 * @param {boolean} showPopularList - 是否顯示推薦跟隨列表（預設：true）
 * @returns 
 */
const BasePage = ({showPopularList = true}) => {
  const { hasToken, currentRegistrant, logout } = useAuth()
const [ lists, setLists ] = useState('')
const [ newTweet, setNewTweet] = useState(null)
const [ showTweetModal, setShowTweetModal ] = useState(false)
const [ addTweetResAlert, setAddTweetResAlert ] = useState(null)
let navigate = useNavigate()
  
  //引入推薦者清單
useEffect(()=>{
  const getPopularListAsync = async () => {
    try{
      const response = await getPopularList();
      //若未成功取得status不等於success，lists useState 保持為空陣列
      if(response.status === 200){
        setLists(()=>{
          return[
            ...response.data
          ]
        });
      } else {
        console.log(response)
        return
      }
    }catch(error){
      console.error(error)
    }
  }
  getPopularListAsync()
},[])

  // 檢查是否有 token
  // 沒有 -> 登入頁
  // 有 -> (管理者) 後台首頁； (使用者) 留在此頁
  useEffect(() => {
    if (!hasToken) {
      navigate('/login');
    } else if (hasToken && currentRegistrant.role === 'admin') {
      navigate('/admin_main');
    }
  }, [navigate, hasToken, currentRegistrant]);

  //引入推薦者清單
  useEffect(()=>{
    const getPopularListAsync = async () => {
      try{
        const response = await getPopularList();
        //若未成功取得status不等於success，lists useState 保持為空陣列
        if(response.status === 200){
          setLists(()=>{
            return[
              ...response.data
            ]
          });
        } else {
          return
        }
      }catch(error){
        console.error(error)
      }
    }

    getPopularListAsync()
  },[])

  // 顯示新增推文成功與否的彈跳視窗
  useEffect(() => {
      if (addTweetResAlert) {
          Swal.fire({
              title: addTweetResAlert.title,
              icon: addTweetResAlert.icon,
              html: (addTweetResAlert.html) ? addTweetResAlert.html : '',
              showConfirmButton: false,
              timer: 3000,
              position: 'top',
          });
      }
  }, [addTweetResAlert])

  //追蹤/取消追蹤
  function handleToggleFollow (id) {
    const currentItem = lists.find(user => user.UserId === id)
    //判斷是否isFollowing為true, true 則執行cancel following
    if(currentItem.isFollowing){
      const cancelFollowingAsync = async (id) => {
        try{
          const cancelResponse = await cancelFollowing(id)
          //成功取消則更新popularList, 否則return
          if(cancelResponse.status === 200){
              setLists((prevUser) => {
                return prevUser.map((user) => {
                    if(user.UserId === id){
                        return{
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
      //若isFollowing為false, 則執行add following
    } else {
      const addFollowingAsync = async (id) => {
        try{
          const addResponse = await addFollowing(id)
          //若成功追蹤, 則更新popularList, 則return
          if(addResponse.status === 200){
              setLists((prevUser) => {
                return prevUser.map((user) => {
                    if(user.UserId === id){
                        return{
                            ...user,
                            isFollowing: !currentItem.isFollowing
                        }
                    }
                    return user
                })
            })
          }else{
            return
          }
              
        }catch(error){
          console.error(error)
        }
      }
      addFollowingAsync(id)
    }
  }

  // 處理新增推文
  async function handleAddTweet(description) {
    try {
      const response = await addTweet(description)
      const logoutStatus = [401, 403]
      
      if (logoutStatus.includes(response.status)) {
        logout(response.data.message)

      } else if (response.status === 200) {
        const tempTweet = response.data.tweet

        setAddTweetResAlert({
          title: '推文成功!',
          icon: 'success',
          html: `<p>${response.data.message}</p>`
        })

        setNewTweet({
          id: tempTweet.id,
          UserId: currentRegistrant.id,
          description: tempTweet.description,
          createdAt: tempTweet.createdAt,
          name: currentRegistrant.name,
          account: currentRegistrant.account,
          avatar: currentRegistrant.avatar,
          repliedCount: 0,
          likedCount: 0,
          isLike: false
        })

        setShowTweetModal(false)

      } else {
        setAddTweetResAlert({
          title: '推文失敗!',
          icon: 'error',
          html: `<p>${response.data.message}</p>`
        })
        setShowTweetModal(false)
      }

      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }

  // 處理登出
  function handleLogOut() {
    logout()
  }

  // 避免導到其他頁面看到畫面
  if (!hasToken || (hasToken && currentRegistrant.role === 'admin')) {
    return (
      <></>
    )
  }

  return (
    <StyledContainer>
      <StyledWrap>

        <StyledSideBarContainer>
          <StyledStickyContainer>
            <SideBar
              logOutButtonOnClick={handleLogOut}
            >
              <SideBarList>
                <SideBarItem to="/main" text="首頁" icon="home" />
                <SideBarItem to={`/user/${currentRegistrant.id}`} text="個人資料" icon="user" />
                <SideBarItem to="/setting" text="設定" icon="setting" />
              </SideBarList>
              <Button
                display="block" 
                text="推文"
                onClick={()=>{
                  setShowTweetModal(true)
                }}
              />
            </SideBar>
          </StyledStickyContainer>
          
        </StyledSideBarContainer>

        <StyledMain>
          <Outlet
            context={{ newTweet }}
          />
        </StyledMain>

        <StyledPopularListContainer>
          <StyledStickyContainer>
            { showPopularList && 
              <PopularList 
                recommendUsers={lists}
                onToggleFollow={handleToggleFollow}
              />
            }
          </StyledStickyContainer>
        </StyledPopularListContainer>
      </StyledWrap>

      {/* 推文彈跳視窗 */}
      {showTweetModal && createPortal(
        <TweetModal
          onClose={() => setShowTweetModal(false)}
          userInfo={currentRegistrant}
          onAddTweet={handleAddTweet}
        />,
        document.body
      )}
    </StyledContainer>
  );
}

export default BasePage;