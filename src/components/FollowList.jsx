import styled from "styled-components"
import { FollowItem } from '.'


const StyledFollowList = styled.div`
  width: 100%;
  height: 100%;
  h6 {
    color: var(--dark-80);
    padding: 4rem;
  };
`

const FollowList = ({followList, onToggleFollow}) => {
    //若有追隨資料則顯示清單
    if (followList.length !== 0){
        return(
        <StyledFollowList>
            { followList.map(follow => {
                return(
                   <FollowItem 
                    key = {follow.followId}
                    item = {follow}
                    onToggleFollow = {onToggleFollow}
                   />
                )
            })}     
        </StyledFollowList>
    )
    }else{
      return (
      //若無追隨資料顯示"尚未有任何追隨"
         <StyledFollowList>
           <h6>尚未有任何追隨</h6>
         </StyledFollowList>
    )
  }
}

export default FollowList