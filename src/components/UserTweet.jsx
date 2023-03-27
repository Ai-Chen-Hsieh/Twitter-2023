import styled from "styled-components"
import { Button, Avatar } from "."

const StyledTweetContainer = styled.div`
    width: 100%;
    height: 150px;
    padding: 10px 10px 10px 20px;
    border-bottom: 8px solid var(--gray-20);
    display: flex;
`

const StyledAvatar = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`

const StyledTextContainer = styled.div`
    margin-left: 10px;
    margin-top: 10px;
    flex: 1;
    display:flex;
    flex-direction: column;
`

const StyledText = styled.textarea`
    resize: none;
    border: none;
    outline: none;
    flex: 1;
    font-weight: 700;
    font-size: 1.4rem;
`

const StyledButton = styled.div`
    align-self: end;
`


const UserTweet = ({item}) => {
    return (
        <StyledTweetContainer >
            <StyledAvatar>
            <Avatar
                imageUrl={item.avatar}/>
            </StyledAvatar>
            <StyledTextContainer>
                <StyledText 
                    placeholder="有什麼新鮮事?"
                />
                <StyledButton>
                    <Button
                        text="推文"
                    />
                </StyledButton>
            </StyledTextContainer>
        </StyledTweetContainer>
    )
}

export default UserTweet