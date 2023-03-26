import styled from "styled-components"
// import { useState } from "react"
import { FollowerItem } from '.'
// 測試用假資料串接
import { dummyUsers } from "testData/dummyUserInfo"


const StyledFollowList = styled.div`
  width: 100%;
  height: 100%;
`


const FollowerList = () => {

    // const [users, setUsers] = useState(dummyUsers)



    return (
        <StyledFollowList>
            { dummyUsers.map(user => {
                return(
                   <FollowerItem 
                    key = {user.id}
                    item = {user}
                   />
                )
            })}     
        </StyledFollowList>
    )
}

export default FollowerList