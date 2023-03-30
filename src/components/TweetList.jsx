//尚未完成增加"like"數量

import styled from "styled-components"
import { TweetItem } from "."

const StyledTweetList = styled.div`
    width:100%;
    min-height: 600px;
`

const TweetList = ({tweetList, userInfo, onLikeToggle}) => {
    let TweetItems = <></>
    
    if (Array.isArray(tweetList)) {
        TweetItems = tweetList.map(tweet => {
            return(
                <TweetItem 
                    key={tweet.id}
                    userInfo={userInfo}
                    item={tweet}
                    onLikeToggle={(id) => {
                        onLikeToggle?.(id)
                    }}
                />
            )
        })
    }

    return (
        <StyledTweetList>
            { TweetItems }
        </StyledTweetList>
    )
}
export default TweetList