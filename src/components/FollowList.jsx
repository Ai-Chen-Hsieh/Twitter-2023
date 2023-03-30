import styled from "styled-components"
import { FollowItem } from '.'


const StyledFollowList = styled.div`
  width: 100%;
  height: 100%;
`


const FollowList = ({followerList, onToggleFollow}) => {

    //若無跟隨者顯示"尚未有任何跟隨者"字串
    if(followerList.length === 0){
        return(
            <StyledFollowList>
                <h1>尚未有任何跟隨者</h1>
            </StyledFollowList>
        )
     
    }else{
    return (
        <StyledFollowList>
            { followerList.map(follower => {
                return(
                   <FollowItem 
                    key = {follower.followerId}
                    item = {follower}
                    onToggleFollow = {onToggleFollow}
                   />
                )
            })}     
        </StyledFollowList>
    )
  }
}

export default FollowList

