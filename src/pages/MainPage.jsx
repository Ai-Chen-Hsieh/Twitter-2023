import { useState } from "react"
import { createPortal } from "react-dom"
import styled from "styled-components" 
import { Header, TweetList, Avatar, Button, TweetModal } from "components"

//測試假資料
import { dummyAllTweet } from "../testData/dummyAllTweet"

/**
 * [前台] 首頁
 * @returns 
 */

const StyledMainContainer = styled.div`
    height:100%;
    border:1px solid var(--gray-20);
`
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

const MainPage = () => {
    const [ showTweetModal, setShowTweetModal ] = useState(false)

    return (
        <>
            <StyledMainContainer>
                <Header text="首頁" />
                    <StyledTweetContainer onClick={()=>setShowTweetModal(true)}>
                        <StyledAvatar>
                        <Avatar
                            imageUrl="https://picsum.photos/200"/>
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
                <TweetList allTweets = {dummyAllTweet}/>
            </StyledMainContainer>
            {showTweetModal && createPortal(
                <TweetModal onClose={() => setShowTweetModal(false)}/>,
                document.body
            )}
        </>

    )
}

export default MainPage