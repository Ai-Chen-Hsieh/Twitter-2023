import { UserHeader, ReplyList } from "components"

/**
 * [前台] 使用者資料頁（推文）
 * @returns 
 */
const UserPage = () => {
    return (
        <>
            <UserHeader
                name="anna"
                tweetCount={10}
            />
            <p>UserPage.jsx</p>
            <ReplyList />
        </>
    )
}

export default UserPage