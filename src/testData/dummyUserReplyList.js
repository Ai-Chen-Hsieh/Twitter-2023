//api: /api/tweets

const dummyAllTweet = [
    {
        id: 1,
        tweet_id: "post1",
        name: "may",
        account: "@may12",
        avatar:"https://fastly.picsum.photos/id/287/200/300.jpg?grayscale&hmac=vDcG2Au5xmOPJLLfeyiDcZqpgw18oNXxUMXmL8kEVEU",
        createdAt: "3小時前",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as oppos",
        likeCount: 10,
        isLike: true,
        replyCount: 5
    },
    {
        id: 2,
        tweet_id: "post2",
        name: "apple",
        account: "@apple01",
        avatar:"https://fastly.picsum.photos/id/870/200/300.jpg?blur=2&grayscale&hmac=ujRymp644uYVjdKJM7kyLDSsrqNSMVRPnGU99cKl6Vs",
        createdAt: "7小時前",
        content: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it",
        likeCount: 8,
        isLike: false,
        replyCount: 2
    }
]

export { dummyAllTweet }