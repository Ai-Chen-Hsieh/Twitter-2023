import styled from "styled-components"
import { Button, Avatar } from "components"

const StyledUserProfileContainer = styled.div`
  width: 100%;
  height: 378px;
  border: 1px solid #E6ECF0;
  background-color: #fff;
  position: relative;
  .edit-userinfo-button {
    position: absolute;
    right: 16px;
    bottom: 122px;
  }
  // img {
     width: 100%;
     height:200px;
     object-fit:cover;
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

  .following, .follower{

  }
`;

const StyledUserInfo = styled.div`
 padding:16px;
 width:100%;
 height:178px;
 border: 1px solid green;

`

const StyledFollowContainer = styled.div`
 border: 1px solid red;
 font-size: var(--fz-secondary)
`



const UserProfile = ({name='John Doe', account='@heyjhon', backgroundImageURL='', followingCount='10', followerCount='20'}) => {
    return (
        <StyledUserProfileContainer>
          <img src={backgroundImageURL} alt='' />
          <div className="avatar">
            <Avatar imageUrl="https://fastly.picsum.photos/id/866/200/300.jpg?hmac=rcadCENKh4rD6MAp6V_ma-AyWv641M4iiOpe1RyFHeI"/>
          </div>
          <div className ="edit-userinfo-button">
            <Button text='編輯個人資料' styled='outlined'/>
          </div>
        <StyledUserInfo>   
          <div className ="user-info">
            <h5>{name}</h5>
            <p className="text-fz-secondary color-secondary">{account}</p>
          </div>
          <p className="text-fz-secondary">Qui similique aut voluptas explicabo illum impedit ut quod fugit.</p>
          <StyledFollowContainer>
            <>
          <span className="following">{`${followingCount}個`}</span><span className="color-secondary">跟隨中</span>
          </>
          <>
          <span className="follower">{`${followerCount}個`}</span><span className="color-secondary">跟隨者</span>
          </>
        </StyledFollowContainer>   
        </StyledUserInfo>          
        </StyledUserProfileContainer>
    )
};

export default UserProfile

