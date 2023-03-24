
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { Avatar } from "."
import { Button } from "."

const StyledPopularContainer = styled.div`
    height: 60px;
    padding: 7px 10px;
    margin: 8px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:hover{
        cursor: pointer;
        background-color: var(--dark-30);
        transition: background-color .1s ease-out;
    }
`

const StyledPopularItem = styled.div`
    flex: 1;
    display:flex;
    text-decoration: none;
    &:hover{
        .name{
            text-decoration: underline;
        }
    }

    .popular-item-content{
        display: flex;
        flex-direction: column;
        flex:1;
        margin: 0 7px;
        .name{
            color: var(--dark-100);
            font-size: 1.6rem;
            font-weight: 700;
            line-height: 2.4rem;
            display:-webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow:hidden;
        }
        .account{
            color: var(--dark-70); 
            font-size: 1.4rem;
            line-height: 2.2rem;
            display:-webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            overflow:hidden;
        }
    }

    .avatar{
        width: 50px;
        height: 50px;
    }
`

const StyledButton = styled.div`
    text-align: end;
    width: 96px;
`


const PopularItem = ({ item, onToggleFollow }) => {
    const navigate = useNavigate(); 

    return(
        <StyledPopularContainer>
            <StyledPopularItem 
                onClick={(e)=> {
                    navigate(`/user/${item.id}`)}}>
                <div className="avatar">
                    <Avatar
                        imageUrl={item.image}
                    />
                </div>
                <div className="popular-item-content">
                    <span className="name">{item.recommendUser}</span>
                    <span className="account">{item.recommendUserAccount}</span>
                </div>
            </StyledPopularItem>
            <StyledButton>
                {item.isFollow ? 
                <Button
                    text="正在追隨"
                    onClick={(e)=>{
                        onToggleFollow(item.id)
                    }}
                /> : 
                <Button
                    styled="outlined" 
                    text="追隨"
                    onClick={(e)=>{
                        onToggleFollow(item.id)
                    }}
                />}
            </StyledButton>  
        </StyledPopularContainer>
    )
}

export default PopularItem