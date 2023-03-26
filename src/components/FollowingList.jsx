import styled from "styled-components"
import { useState } from "react"
import { FollowingItem } from '.'
// 測試用假資料串接
import { dummyUsers } from "testData/dummyUserInfo"


const StyledFollowList = styled.div`
  width: 100%;
  height: 100%;
`


const FollowingList = () => {

    const [users, setUsers] = useState(dummyUsers)
    
    function handleFollow(id) {
        setUsers((users) => {
            return users.map((user) => {
              if(user.id === id) {
                return {
                 ...user,
                 isFollow: !user.isFollow
                }
              }
              return user
            })
        }) 
    }

    return (
        <StyledFollowList>
            { users.map(user => {
                return(
                   <FollowingItem 
                    key = {user.id}
                    item = {user}
                    onToggleFollow = {handleFollow}
                   />
                )
            })}     
        </StyledFollowList>
    )
}

export default FollowingList
