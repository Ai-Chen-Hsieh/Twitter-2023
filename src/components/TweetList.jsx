//尚未完成增加"like"數量

import styled from "styled-components"
import { useState } from "react"
import { TweetItem } from "."

const StyledTweetList = styled.div`
    width:100%;
    min-height: 600px;
`

const TweetList = ({allTweets}) => {
    const [ tweets, setTweets ] = useState(allTweets)

    function handleLikeToggle(id) {
        const currentItem = tweets.find(tweet => tweet.id === id )
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