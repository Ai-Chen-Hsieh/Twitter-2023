import styled from "styled-components"
import { Button, Avatar } from "."
import { useNavigate } from "react-router-dom"

const StyledFollowItemContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid #E6ECF0;
  background-color: #fff;
  position: relative;
  .avatar {
    width:50px;
    height:50px;
    position:absolute;
    top:16px;
    left:23px;
    &:hover {
      cursor:pointer;
     }
    }
`

const StyledFollowButtonWrapper = styled.div`
  position: absolute;
  right: 30px;
  top: 16px;
    Button {
      z-index: 2;  
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

const FollowItem = ({item, onToggleFollow}) => {

    const navigate = useNavigate()

    return(
        <StyledFollowItemContainer>
          <div className="avatar" onClick ={()=> {navigate(`/user/${item.followId}`)}}>
             <Avatar imageUrl={item.followAvatar}/>
          </div>
          <StyledFollowButtonWrapper>
            { item.isFollowing ?
              <Button 
                 text='正在追隨'
                 onClick = {(e) => {
                   onToggleFollow(item.followId)
                 }}        
              /> :
              <Button 
                 text ='追隨' 
                 styled ='outlined'
                 onClick = {(e) => {
                   onToggleFollow(item.followId)
                 }}
              />                 
            }  
          </StyledFollowButtonWrapper>
          <StyledFollowItem> 
             <p className="user-name">{item.followName}</p>
             <p className="user-description text-fz-secondary">{item.followIntro}</p>
          </StyledFollowItem>          
        </StyledFollowItemContainer>
    )
}

export default FollowItem
