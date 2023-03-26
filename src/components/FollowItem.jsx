import styled from "styled-components"
import { Button, Avatar } from "."

const StyledFollowItemContainer = styled.div`
  width: 100%;
  border: 1px solid #E6ECF0;
  background-color: #fff;
  position: relative;
  .userinfo-button {
    position: absolute;
    right: 16px;
    top: 216px;
  }
  .avatar {
    width:50px;
    height:50px;
    position:absolute;
    top:124px;
    left:16px;
  }
//   .user-info {
//     width: 95px;
//     height: 48px;
//   }
`

const StyledFollowItem = styled.div`
 padding:72px 16px 0 16px;
 width:100%;
 height:100%;
 position:relative;
 border: 1px solid green;
`

// const StyledUserInfo =styled.div`
// // border: 1px solid blue;
// `

// const StyledFollowContainer = styled.div`
// //  border: 1px solid red;
//   font-size: var(--fz-secondary);
//   display:flex;
//    .follower-link {
//   margin-left:20px;
//    &:hover {
//     cursor:pointer;
//     color:var(--main);
//     }
//   };
//    .following-link {
//    &:hover {
//     cursor:pointer;
//     color:var(--main);
//     }
//   }
//  }
// `



const FollowItem = ({name, imageUrl, description}) => {
    return(
        <StyledFollowItemContainer>
          <div className="avatar">
            <Avatar imageUrl={imageUrl}/>
          </div>
          <div className ="follow-button">
            <Button text='正在跟隨' styled='outlined:hover'/>
          </div>
         <StyledFollowItem> 
             <h5>{name}</h5>
             <p className="user-description text-fz-secondary">{description}</p>
         </StyledFollowItem>          
        </StyledFollowItemContainer>
    )
}

export default FollowItem