import styled from "styled-components"
import { useState } from "react"
import { PopularItem } from "."

const StyledPopularList = styled.div`
    width: 100%;
    height: 100%;
    max-width: 270px;
    min-height: 730px;
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

const PopularList = ({ recommendUsers }) => {
    const [ users, setUser ] = useState(recommendUsers)

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