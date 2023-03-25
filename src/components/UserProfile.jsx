import styled from "styled-components"
import { Button, Avatar } from "."
import { useNavigate, useParams } from "react-router-dom"


const StyledUserProfileContainer = styled.div`
  width: 100%;
  border: 1px solid #E6ECF0;
  background-color: #fff;
  position: relative;
  .userinfo-button {
    position: absolute;
    right: 16px;
    top: 216px;
  }
  .background-image {
     width:100%;
     height:200px;
    //  border: 1px solid red;
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
  }
  .user-info {
    width: 95px;
    height: 48px;
  }
`

const StyledUserInfoContainer = styled.div`
 padding:72px 16px 0 16px;
 width:100%;
 height:100%;
 position:relative;
//  border: 1px solid green;
`

const StyledUserInfo =styled.div`
// border: 1px solid blue;
`

const StyledFollowContainer = styled.div`
//  border: 1px solid red;
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
 }
`

const UserProfile = ({name, account, description, backgroundImageUrl, imageUrl, followingCount, followerCount}) => {


  const navigate = useNavigate()
  const { user_id } = useParams();

  return (
        <StyledUserProfileContainer>
          <div className="background-image">
            <img src={backgroundImageUrl} alt='' />
          </div>
          <div className="avatar">
            <Avatar imageUrl={imageUrl}/>
          </div>
          <div className ="userinfo-button">
            <Button text='編輯個人資料' styled='outlined'/>
          </div>
         <StyledUserInfoContainer> 
             <StyledUserInfo>  
               <div className ="user-info">
                 <h5>{name}</h5>
                  <p className="text-fz-secondary color-secondary">{account}</p>
               </div>
                  <p className="user-description text-fz-secondary">{description}</p>
               <StyledFollowContainer>
                  <div className ="following-link" onClick={()=> {navigate(`/user/${user_id}/following`)}}>
                    <span className="following-count">{`${followingCount} 個`}</span>
                    <span className="following color-secondary">跟隨中</span>
                  </div>
                  <div className ="follower-link" onClick={()=> {navigate(`/user/${user_id}/follower`)}}>
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



