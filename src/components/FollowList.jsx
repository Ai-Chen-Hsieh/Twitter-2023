import styled from "styled-components"
import { FollowItem } from '.'
// 測試用假資料串接



const StyledFollowList = styled.div`
  width: 100%;
  height: 100%;
`


const FollowList = ({users, onToggleFollow}) => {
    return (
        <StyledFollowList>
            { users.map(user => {
                return(
                   <FollowItem 
                    key = {user.id}
                    item = {user}
                    onToggleFollow = {onToggleFollow}
                   />
                )
            })}     
        </StyledFollowList>
    )
}

export default FollowList

