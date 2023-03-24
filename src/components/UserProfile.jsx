import styled from "styled-components"
import { Button, Avatar } from "components"

const StyledUserProfileContainer = styled.div`
  width: 100%;
  height: 378px;
  border: 1px solid #E6ECF0;
  background-color: #fff;
  position: relative;
  .button {
  position: absolute;
  right: 16px;
  bottom: 122px;
  }
`;

const StyledUserProfileBackground = styled.div`
  width: 100%;
  height: 200px;
  object-fit:cover;
  background-image: url("https://cdn.sanity.io/images/0vv8moc6/dvm360/e9b7c5bc00c41167ab8d607d02e11385fba9dec5-5200x3550.jpg/AdobeStock_41610815.jpeg?w=1500&fit=max&auto=format")
`

const StyledAvatarContainer = styled.div`
  width: 140px;
  height: 140px;
  position: absolute;
  top: 124px;
  left: 16.13px;
`

const StyledUserInfo = styled.div`
  width: 95px;
  height: 48px;
  
`



const UserProfile = ({name='John Doe', account='heyjhon'}) => {
    return (
        <StyledUserProfileContainer>
            <StyledUserProfileBackground>
            </StyledUserProfileBackground>
            <StyledAvatarContainer>
              <Avatar imageUrl="https://cdn.sanity.io/images/0vv8moc6/dvm360/e9b7c5bc00c41167ab8d607d02e11385fba9dec5-5200x3550.jpg/AdobeStock_41610815.jpeg?w=1500&fit=max&auto=format"/>
            </StyledAvatarContainer>
          <div className ="button">
            <Button text='編輯個人資料' styled='outlined'/>
          </div>
          <StyledUserInfo>
            <h5>{name}</h5>
            <p className="text-fz-secondary color-secondary">{account}</p>
            <p>Qui similique aut voluptas explicabo illum impedit ut quod fugit.</p>
          </StyledUserInfo>          
        </StyledUserProfileContainer>
    )
};

export default UserProfile

