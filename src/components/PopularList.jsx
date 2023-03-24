import styled from "styled-components"
import { useState } from "react"
import { PopularItem } from "."
//測試用 :串假資料
import { dummyUsers } from "testData/dummyRecommendUser"

const StyledPopularList = styled.div`
    width: 270px;
    height: 730px;
    border-radius: 10px;
    background: var(--dark-20);

    h1{        
        padding-left: 20px;
        font-size: 1.6rem;
        line-height: 4.5rem;
        text-align: start;
        border-bottom: 1px solid var(--gray-20);
    }
`

const PopularList = () => {
    const [ users, setUser ] = useState(dummyUsers)

    function handleFollow (id){
        const currentItem = users.find(user => user.id === id)
        setUser((prevUser) => {
            return prevUser.map((user) => {
                if(user.id === id){
                    return{
                        ...user,
                        isFollow: !currentItem.isFollow
                    }
                }
                return user
            })
        })

    }

    return (
        <StyledPopularList>
            <h1>推薦跟隨</h1>
            {users.map(user => {
                return(
                <PopularItem 
                    key={user.id} 
                    item={user}
                    onToggleFollow={handleFollow}
                />  
                )
            })}
        </StyledPopularList>
    )
}

export default PopularList