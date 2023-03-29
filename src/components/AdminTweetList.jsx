import AdminTweetItem from "./AdminTweetItem"

/**
 * [後台] 推文清單
 * @param {array} tweetList - 推文清單 
 * @returns 
 */
const AdminTweetList = ({ tweetList }) => {
    let TweetItem = <></>

    if (tweetList.length > 0) {
        TweetItem = tweetList.map(tweetItem => {
            return (
                <AdminTweetItem
                    key={tweetItem.id}
                    item={tweetItem}
                />
            )
        })
    }

    return(
        <>
            { TweetItem }
        </>
    )
}

export default AdminTweetList