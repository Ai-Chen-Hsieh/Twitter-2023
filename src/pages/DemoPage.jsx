import { Header, TweetModal, Button } from "components";

import { createPortal } from "react-dom";
import { useState } from "react";


/**
 * [Demo] 共用 Component
 * @returns 
 */
const DemoPage = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <Header text="首頁"/>
          <br />
          <Button
            text="推文"
             onClick={()=>{
              setShowModal(true)
            }}
          />
          <br />
          {showModal && createPortal(
            <TweetModal onClose={() => setShowModal(false)}/>,
            document.body
          )}

        </div>
      </div>
    </div>
  );
}

export default DemoPage;

