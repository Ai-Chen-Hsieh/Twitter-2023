import styled from "styled-components"
import { Button, Avatar } from "."
import { useNavigate } from "react-router-dom"

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
    &:hover {
      cursor:pointer;
     }
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

const FollowingItem = ({item, onToggleFollow}) => {

    const navigate = useNavigate()

    return(
        <StyledFollowItemContainer>
          <div className="avatar" onClick ={()=> {navigate(`/user/${item.id}`)}}>
             <Avatar imageUrl={item.imageUrl}/>
          </div>
          <StyledFollowButtonWrapper>
             <Button 
                 text='正在跟隨'
                 onClick = {(e) => {
                   onToggleFollow(item.id)
                 }}        
              /> 
          </StyledFollowButtonWrapper>
          <StyledFollowItem> 
             <p className="user-name">{item.name}</p>
             <p className="user-description text-fz-secondary">{item.description}</p>
          </StyledFollowItem>          
        </StyledFollowItemContainer>
    )
}

export default FollowingItem