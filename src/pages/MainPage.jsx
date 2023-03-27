import { useState } from "react"
import { createPortal } from "react-dom"
import styled from "styled-components" 
import { Header, TweetList, TweetModal, UserTweet } from "components"

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


const MainPage = () => {
    const [ showTweetModal, setShowTweetModal ] = useState(false)

    function handleClick(){
        setShowTweetModal(true)
    }
    return (
        <>
            <StyledMainContainer>
                <Header text="首頁" />
                    <UserTweet 
                        item={dummyAllTweet[0]}
                        onClick={handleClick}/>
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