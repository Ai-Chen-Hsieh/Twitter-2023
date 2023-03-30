import styled from "styled-components"
import { TweetItem } from "."

const StyledTweetList = styled.div`
    width:100%;
    min-height: 600px;
`

/**
 * 推文清單
 * @param {array} tweetList - 推文清單
 * @param {function} onLikeToggle - 處理收藏/取消收藏推文
 * @param {function} onShowReplyModal - 處理顯示回覆彈跳視窗
 * @returns 
 */
const TweetList = ({tweetList, onLikeToggle, onShowReplyModal}) => {
    let TweetItems = <></>
    
    if (Array.isArray(tweetList)) {
        TweetItems = tweetList.map(tweet => {
            return(
                <TweetItem 
                    key={tweet.id}
                    item={tweet}
                    onLikeToggle={(id) => {
                        onLikeToggle?.(id)
                    }}
                    onShowReplyModal={(tweet) => {
                        onShowReplyModal?.(tweet)
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