//尚未完成增加"like"數量

import styled from "styled-components"
import { useState } from "react"
import { TweetItem } from "."
import { dummyAllTweet } from "testData/dummyAllTweet"

const StyledTweetList = styled.div`
    width: 500px;
    height: 600px;
`

const TweetList = () => {
    const [ tweets, setTweets ] = useState(dummyAllTweet)

    function handleLikeToggle(id) {
        const currentItem = tweets.find(tweet => tweet.id === id )
        console.log(currentItem)
        setTweets((prevTweets) => {
            return prevTweets.map((tweet) => {
                if(tweet.id === id){
                    return{
                        ...tweet,
                        isLike: !currentItem.isLike
                    }
                }
                return tweet
            })
        })
    }

    return (
        <StyledTweetList>
            {tweets.map(tweet => {
                return(
                <TweetItem 
                    key={tweet.id}
                    item={tweet}
                    onLikeToggle={handleLikeToggle}
                />
                )
            })}
            
        </StyledTweetList>
    )
}
export default TweetList