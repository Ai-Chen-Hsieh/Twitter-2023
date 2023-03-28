import AdminTweetItem from "./AdminTweetItem"

/**
 * [後台] 推文清單
 * @param {array} tweetList - 推文清單 
 * @returns 
 */
const AdminTweetList = ({ tweetList }) => {
    const TweetItem = tweetList.map(tweetItem => {
        return (
            <AdminTweetItem
                key={tweetItem.id}
                item={tweetItem}
            />
        )
    })

    return(
        <>
            { TweetItem }
        </>
    )
}

export default AdminTweetList