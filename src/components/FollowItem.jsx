import styled from "styled-components"
import { Button, Avatar } from "."

const StyledFollowItemContainer = styled.div`
  width: 100%;
  border: 1px solid #E6ECF0;
  border-top: none;
  background-color: #fff;
  position: relative;
  .avatar {
    width:50px;
    height:50px;
    position:absolute;
    top:16px;
    left:23px;
  }
`

const StyledFollowButtonWrapper = styled.div`
    position: absolute;
    right: 30px;
    top: 16px;
    z-index:2;
    Button {
     z-index: 100;  
    }   
`

const StyledFollowItem = styled.div`
 padding:23px 30px 16px 81px;
 width:100%;
 height:100%;
 .user-name {
   font-weight:bold; 
 }
 .user-description {
    padding-top:15px;
 } 
`

const FollowItem = ({name, imageUrl, description}) => {
    return(
        <StyledFollowItemContainer>
          <div className="avatar">
            <Avatar imageUrl={imageUrl}/>
          </div>
        <StyledFollowButtonWrapper>
            <Button text='正在跟隨' styled='outlined:hover'/>
        </StyledFollowButtonWrapper>
        <StyledFollowItem> 
           <p className="user-name">{name}</p>
           <p className="user-description text-fz-secondary">{description}</p>
         </StyledFollowItem>          
        </StyledFollowItemContainer>
    )
}

export default FollowItem