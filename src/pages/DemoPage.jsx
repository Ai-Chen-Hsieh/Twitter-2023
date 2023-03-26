import { Header } from "components";
import { ModalContainer, ModalHeader, ModalCloseButton, ModalContent, ModalFooter, ModalTitle, ModalWarning } from "../components/common/modal.styled";
import { Button } from "../components"

/**
 * [Demo] 共用 Component
 * @returns 
 */
const DemoPage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <Header text="首頁"/>
          <ModalContainer>
            <ModalHeader>
              <ModalCloseButton/>
              <ModalTitle>編輯個人資料</ModalTitle>
              <Button
                text="儲存"
              />
            </ModalHeader>
            <ModalContent/>
          </ModalContainer>
          <br></br>
          <ModalContainer>
            <ModalHeader>
              <ModalCloseButton/>
            </ModalHeader>
            <ModalContent/>
            <ModalFooter>
              <ModalWarning>字數不可超過140字</ModalWarning>
              <Button
                text="推文"
              />
            </ModalFooter>
          </ModalContainer>
          <br></br>
          <ModalContainer>
            <ModalHeader>
              <ModalCloseButton/>
            </ModalHeader>
            <ModalContent/>
            <ModalFooter>
              <ModalWarning>內容不可空白</ModalWarning>
              <Button
                text="回覆"
              />
            </ModalFooter>
          </ModalContainer>
          <br />
        </div>
      </div>
    </div>
  );
}

export default DemoPage;