import { useParams } from "react-router-dom"
import { UserHeader, TabList, TabItem, FollowList } from "components"

/**
 * [前台] 使用者資料頁（追隨者）
 * @returns 
 */
const UserPageFollowerList = () => {
    const { user_id } = useParams();

    return (
        <>
            <UserHeader
                name="anna"
                tweetCount={10}
            />
            <TabList>
                <TabItem to={`/user/${user_id}/follower`} text="追隨者" />
                <TabItem to={`/user/${user_id}/following`} text="正在追隨" />
            </TabList>
         
          {/* <FollowItem 
          name='Apple' 
          imageUrl='https://hips.hearstapps.com/hmg-prod/images/domestic-cat-lies-in-a-basket-with-a-knitted-royalty-free-image-1592337336.jpg?crop=0.668xw:1.00xh;0.247xw,0&resize=1200:*' 
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint ullamco est sit aliqua dolor do sit aliqua dolor do amet sint ullamco est sit aliqua dolor do  sit aliqua dolor do amet sint ullamco est sit aliqua dolor do amet sint."/>
          <FollowItem 
          name='Apple' 
          imageUrl='https://hips.hearstapps.com/hmg-prod/images/domestic-cat-lies-in-a-basket-with-a-knitted-royalty-free-image-1592337336.jpg?crop=0.668xw:1.00xh;0.247xw,0&resize=1200:*' 
          description="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint ullamco est sit aliqua dolor do sit aliqua dolor do amet sint."/>
          <p>UserPageFollowerList.jsx</p> */}
          <FollowList />
        </>
    )
}

export default UserPageFollowerList