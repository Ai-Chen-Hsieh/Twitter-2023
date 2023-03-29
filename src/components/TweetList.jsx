//尚未完成增加"like"數量

import styled from "styled-components"
import { useState } from "react"
import { TweetItem } from "."
import { dummyUserProfile } from "../testData/dummyUserProfile"

const StyledTweetList = styled.div`
    width:100%;
    min-height: 600px;
`

const TweetList = ({allTweets, userInfo}) => {
    const [ tweets, setTweets ] = useState(allTweets)

    function handleLikeToggle(id) {
        const currentItem = tweets.find(tweet => tweet.id === id )
        setTweets((prevTweets) => {
            return prevTweets.map((tweet) => {
                if(tweet.id === id){
                    if(tweet.isLike){
                        return{
                            ...tweet,
                            isLike: !currentItem.isLike,
                            likedCount: currentItem.likedCount - 1 
                        }
                    }else{
                        return{
                            ...tweet,
                            isLike: !currentItem.isLike,
                            likedCount: currentItem.likedCount + 1 
                        }
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
                    userInfo={dummyUserProfile}
                    item={tweet}
                    onLikeToggle={handleLikeToggle}
                />
                )
            })}
            
        </StyledTweetList>
    )
}
export default TweetList