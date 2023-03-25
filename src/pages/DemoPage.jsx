import { Header } from "components";
import { ModalContainer, ModalHeader, ModalCloseButton, ModalContent, ModalFooter } from "../components/common/modal.styled";
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
              <span className="title">編輯個人資料</span>
              <Button
                text="儲存"
              />
            </ModalHeader>
            <ModalContent></ModalContent>
          </ModalContainer>
          <br></br>
          <ModalContainer>
            <ModalHeader>
              <ModalCloseButton/>
            </ModalHeader>
            <ModalContent></ModalContent>
            <ModalFooter>
              <span className="warning">字數不可超過140字</span>
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
            <ModalContent></ModalContent>
            <ModalFooter>
              <span className="warning">內容不可空白</span>
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