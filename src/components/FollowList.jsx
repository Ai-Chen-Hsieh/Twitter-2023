import styled from "styled-components"
import { FollowItem } from '.'


const StyledFollowList = styled.div`
  width: 100%;
  height: 100%;
`


const FollowList = ({followList, onToggleFollow}) => {
    //若有跟隨者顯示清單
    if (followList.length !== 0){
        return(
        <StyledFollowList>
            { followList.map(follow => {
                return(
                   <FollowItem 
                    key = {follow.followingId}
                    item = {follow}
                    onToggleFollow = {onToggleFollow}
                   />
                )
            })}     
        </StyledFollowList>
    )
    }else{
      return (
        //若無跟隨者顯示"尚未有任何跟隨"
         <StyledFollowList>
           <h5>尚未有任何跟隨</h5>
         </StyledFollowList>
    )
  }
}

export default FollowList

