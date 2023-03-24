import { UserHeader, UserProfile } from "components";

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
            name="John"
            tweetCount={25}/>
          <UserProfile/>
        </div>
      </div>
    </div>
  );
}

export default DemoPage;

