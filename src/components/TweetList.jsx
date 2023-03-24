import styled from "styled-components"
import { TweetItem } from "."
import { dummyAllTweet } from "testData/dummyUserReplyList"

const StyledTweetList = styled.div`
    width: 500px;
    height: 600px;
`

const TweetList = () => {
    return (
        <StyledTweetList>
            {dummyAllTweet.map(user_tweet => {
                return(
                <TweetItem 
                    key={user_tweet.tweet_id}
                    item={user_tweet}
                />
                )
            })}
            
        </StyledTweetList>
    )
}
export default TweetList