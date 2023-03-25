import { createPortal } from "react-dom";
import { useState } from "react";
import { Header, Button } from "components";
import { ReplyModal } from "components";

/**
 * [Demo] 共用 Component
 * @returns 
 */
const DemoPage = () => {
  const [ showReplyModal, setShowReplyModal ] = useState(false)
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <Header text="首頁"/>
          <Button
            text="回覆"
          />
          <ReplyModal/>
         
          <br />
        </div>
      </div>
    </div>
  );
}

export default DemoPage;