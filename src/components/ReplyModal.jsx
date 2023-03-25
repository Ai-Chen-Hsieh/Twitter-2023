import { ModalWrapper, Modal, ModalHeader, ModalCloseButton, ModalContent, ModalFooter, ModalTitle, ModalWarning } from "../components/common/modal.styled";
import { TweetItem } from "./TweetItem"

const ReplyModal = () => {
    return (
        <>
        <ModalWrapper>
            <Modal>
                <ModalHeader>
                    <ModalCloseButton/>
                </ModalHeader>
            </Modal>
            
        </ModalWrapper>
        </>
    )
}

export default ReplyModal