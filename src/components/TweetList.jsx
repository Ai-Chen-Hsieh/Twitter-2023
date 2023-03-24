import styled from "styled-components"
import { TweetItem } from "."

const StyledTweetList = styled.div`
    //mainPage display: flex; flex:1 max-height
    width: 500px;
    height: 600px;
`

const TweetList = () => {
    return (
        <StyledTweetList>
            <TweetItem />
            <TweetItem />
        </StyledTweetList>
    )
}
export default TweetList