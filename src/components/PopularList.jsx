import styled from "styled-components"
// import { useState } from "react"
import { PopularItem } from "."

//useState邏輯應該要在外層
const StyledPopularList = styled.div`
    width: 100%;
    height: 100%;
    max-width: 270px;
    max-height: 730px;
    border-radius: 10px;
    background: var(--dark-20);

    h1{        
        padding-left: 20px;
        font-size: 1.6rem;
        line-height: 4.5rem;
        text-align: start;
        border-bottom: 1px solid var(--gray-20);
    }
    p{
        text-align: center;
    }
`

const PopularList = ({ recommendUsers, onToggleFollow }) => {

    //若未成功取得推薦清單, 顯示"無推薦清單"
    if(typeof recommendUsers=== 'string'){
        return( 
        <StyledPopularList>
            <h1>推薦跟隨</h1>
            <p>無推薦清單</p>
        </StyledPopularList>
        )
    } else {
        return (
            <StyledPopularList>
                <h1>推薦跟隨</h1>
                {recommendUsers.map(user => {
                    return(
                    <PopularItem 
                        key={user.UserId} 
                        item={user}
                        onToggleFollow={onToggleFollow}
                    />  
                    )
                })}
            </StyledPopularList>
        )
    }
}

export default PopularList