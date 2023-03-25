import { UserHeader, UserProfile } from "components";
import { user } from "testData/dummyUserInfo";

/* 透過切換 user[0] 或 user[1] 查看不同 User/ 

/**
 * [Demo] 共用 Component
 * @returns 
 */
const DemoPage = () => {

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <UserHeader
            name='John'
            tweetCount={25}/>
          <UserProfile
            name={user[0].name}
            account={user[0].account}
            backgroundImageUrl={user[0].backgroundImageUrl}
            imageUrl={user[0].imageUrl}
            description={user[0].description}
            followingCount={user[0].followingCount}
            followerCount={user[0].followerCount}
          />      
        </div>
      </div>
    </div>
  );
}

export default DemoPage;

