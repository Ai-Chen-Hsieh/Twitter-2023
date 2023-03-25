import styled from "styled-components"
import { Button, Avatar } from "."

const StyledUserProfileContainer = styled.div`
  width: 100%;
  height: 378px;
  border: 1px solid #E6ECF0;
  background-color: #fff;
  position: relative;
  .userinfo-button {
    position: absolute;
    right: 16px;
    bottom: 122px;
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
 padding:16px;
 width:100%;
 height:178px;
 position:relative;
`

const StyledUserInfo =styled.div`
// border: 1px solid blue;
 position:absolute;
 bottom:0; 
`

const StyledFollowContainer = styled.div`
//  border: 1px solid red;
 font-size: var(--fz-secondary);
 display:flex;
 .follower-link {
  // border: 1px solid pink;
  margin-left:20px;
 }
`

const UserProfile = ({name='John Doe', account='@heyjhon', backgroundImageURL='https://cdn.sanity.io/images/0vv8moc6/dvm360/e9b7c5bc00c41167ab8d607d02e11385fba9dec5-5200x3550.jpg/AdobeStock_41610815.jpeg?w=1500&fit=max&auto=format', followingCount='20', followerCount='20'}) => {
    return (
        <StyledUserProfileContainer>
          <div className="background-image">
            <img src={backgroundImageURL} alt='' />
          </div>
          <div className="avatar">
            <Avatar imageUrl="https://fastly.picsum.photos/id/287/200/300.jpg?grayscale&hmac=vDcG2Au5xmOPJLLfeyiDcZqpgw18oNXxUMXmL8kEVEU"/>
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
          <p className="text-fz-secondary">Qui similique aut voluptas explicabo illum impedit ut quod fugit.</p>
          <StyledFollowContainer>
          <div className ="following-link">
            <span className="following-count">{`${followingCount} 個`}</span>
            <span className="following color-secondary">跟隨中</span>
          </div>
          <div className ="follower-link">
            <span className="follower-count">{`${followerCount} 個`}</span>
            <span className="follower color-secondary">跟隨者</span>
          </div>
        </StyledFollowContainer>
        </StyledUserInfo>   
        </StyledUserInfoContainer>          
        </StyledUserProfileContainer>
    )
};

export default UserProfile



