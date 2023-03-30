//需要用到userProfile的頁面需加上isFollowing參數

import styled from "styled-components"
import { Button, Avatar } from "."
import { useNavigate, useParams } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"


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

const ButtonPanel = ({isFollowing, id, onToggleFollow}) => {
  if(isFollowing){
    return (
      <Button
        text="正在追蹤"
        onClick={(e)=>{
          onToggleFollow(id)
      }}
      />
    )
  }else {
    return(
      <Button
        text="追蹤"
        styled="outlined"
        onClick={(e)=>{
          onToggleFollow(id)
      }}
      />
    )
  }
}

const UserProfile = ({name, account, description, backgroundImageUrl, imageUrl, followingCount, followerCount, isFollowing, onToggleFollow}) => {
  const navigate = useNavigate();
  const { user_id } = useParams();
  const { currentRegistrant } = useAuth()
  
    return (
        <StyledUserProfileContainer>
          <div className="background-image">
            <img src={backgroundImageUrl} alt='' />
          </div>
          <div className="avatar">
            <Avatar imageUrl={imageUrl}/>
          </div>
          <StyledButtonWrapper>
            {(Number(user_id) === currentRegistrant.id) ? (
              <Button text='編輯個人資料' styled='outlined'/>
            ) : (
              <ButtonPanel
                isFollowing={true}
                id={user_id}
                onToggleFollow={onToggleFollow}
              />
            )}
          </StyledButtonWrapper>  
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
    )
};

export default UserProfile;
