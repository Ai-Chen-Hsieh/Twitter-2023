import styled from "styled-components"
import { Button, Avatar, UserEditModal } from "."
import { useNavigate, useParams } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import { createPortal } from "react-dom"
import { useState } from "react"


const StyledUserProfileContainer = styled.div`
  width: 100%;
  position: relative;
  .background-image {
    width:100%;
    height:200px;
    img {
    width:100%;
    height:100%;
    object-fit:cover;
    }
  }
  .avatar {
    width:140px;
    height:140px;
    position:absolute;
    top:124px;
    left:16px;
    border: 4px solid #fff;
    border-radius: 50%;
  }
`

const StyledUserInfo =styled.div`
  .user-description {
    line-height: 2.2rem;
    padding-top: 6px;
  }
`

const StyledButtonWrapper =styled.div`
   position: absolute;
   right: 16px;
   top: 216px;
   z-index: 1;
`
      
const StyledUserInfoContainer = styled.div`
   padding:72px 16px 16px 16px;
   width:100%;
   height:100%;
   position:relative;
`


const StyledFollowContainer = styled.div`
  font-size: var(--fz-secondary);
  display:flex;
    .follower-link {
      margin-left:20px;
      &:hover {
        cursor:pointer;
        color:var(--main);
      }
    };
   .following-link {
       &:hover {
        cursor:pointer;
        color:var(--main);
    }
  }
`

const ButtonPanel = ({isFollowing}) => {
  if(isFollowing){
    return (
      <Button
        text="正在追隨"

      />
    )
  }else {
    return(
      <Button
        text="追隨"
        styled="outlined"
      />
    )
  }
}

const UserProfile = ({name, account, description, backgroundImageUrl, imageUrl, followingCount, followerCount, isFollowing, onToggleFollow}) => {
  const navigate = useNavigate();
  const { user_id } = useParams();
  const { currentRegistrant } = useAuth()
  const [ showEditModal, setShowEditModal ] = useState(false)

  //個人檔案資訊
  const userProfileInfo = {
    name: name,
    avatar: imageUrl,
    cover: backgroundImageUrl,
    introduction: description
  }

  //是否正在瀏覽自己的個人頁面
  const isPageOwner = Number(user_id) === currentRegistrant.id
  
    return (
      <>
        <StyledUserProfileContainer>
          <div className="background-image">
            <img src={backgroundImageUrl} alt='' />
          </div>
          <div className="avatar">
            <Avatar imageUrl={imageUrl}/>
          </div>
          {isPageOwner ? (
            <StyledButtonWrapper
              onClick={()=>{
                setShowEditModal(true)
              }}
            >
              <Button text='編輯個人資料' styled='outlined'/>
            </StyledButtonWrapper>
          ) : (
            <StyledButtonWrapper
              onClick={()=>{
                onToggleFollow(user_id)
              }}
            >
              <ButtonPanel
                isFollowing={isFollowing}
              />
            </StyledButtonWrapper>  
          )}
          <StyledUserInfoContainer> 
             <StyledUserInfo>  
               <div className ="user-info">
                  <h5>{name}</h5>
                  <p className="account text-fz-secondary color-secondary">@{account}</p>
               </div>
               <p className="user-description text-fz-secondary">{description}</p>
               <StyledFollowContainer>
                  <div className ="following-link mt-2" onClick={()=> {navigate(`/user/${user_id}/following`)}}>
                    <span className="following-count">{`${followingCount} 個`}</span>
                    <span className="following color-secondary">跟隨中</span>
                  </div>
                  <div className ="follower-link mt-2" onClick={()=> {navigate(`/user/${user_id}/follower`)}}>
                    <span className="follower-count">{`${followerCount} 個`}</span>
                    <span className="follower color-secondary">跟隨者</span>
                  </div>
               </StyledFollowContainer>
             </StyledUserInfo>   
           </StyledUserInfoContainer>          
        </StyledUserProfileContainer>
        {showEditModal && createPortal(
            <UserEditModal 
              userInfo={userProfileInfo}
              onClose={() => setShowEditModal(false)}/>,
            document.body
          )}
      </>
    )
};

export default UserProfile;
