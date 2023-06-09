import styled from "styled-components"
import { Button, Avatar } from "."
import { useNavigate, useParams } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import { ReactComponent as Notify } from "assets/images/icon_notify.svg"
import { ReactComponent as Msg } from "assets/images/icon_msg.svg"

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
    background-color: var(--dark-20);
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
  button {
    vertical-align: middle;
  }
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

//訊息 icon
const StyledNotify = styled(Notify)`
  width: 40px;
  height: 40px;
  display: inline-block;
  vertical-align: middle;
`

const StyledMsg = styled(Msg)`
  width: 40px;
  height: 40px;
  display: inline-block;
  vertical-align: middle;
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

const UserProfile = ({name, account, description, backgroundImageUrl, imageUrl, followingCount, followerCount, isFollowing, onUserInfo, onShowEditModal ,onToggleFollow}) => {
  const navigate = useNavigate();
  const { user_id } = useParams();
  const { currentRegistrant } = useAuth()

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
                onShowEditModal?.()
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
              <StyledMsg className="me-4"/>
              <StyledNotify className="me-4"/>
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
      </>
    )
};

export default UserProfile;
