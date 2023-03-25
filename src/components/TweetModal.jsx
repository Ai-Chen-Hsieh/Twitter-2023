//opacity 問題
//字數限制140

import styled from "styled-components";
import { ModalContainer, ModalHeader, ModalCloseButton, ModalContent, ModalFooter } from "../components/common/modal.styled";
import { Button, Avatar } from "../components"


const StyledModal = styled.div`
    width: 100%;
    height: 100%;
    background-color: var(--dark-70);
    opacity: 0.9;

    /*position*/
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;

    .modalInput{
        width:100%;
        height: 100%;
        padding: 10px;
        display: flex;
    }
    .avatar{
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
    .tweetInput{
        color: var(--secondary);
        margin-top: 10px;
        margin-left: 10px;
        margin-right: 10px;
        flex: 1;

        .tweetInputValue{
            border:none;
            font-size: 1.4rem;
            width: 100%;
            resize:none;

            &:focus {
                outline: none;
            }
        }
    }
`

const TweetModal = ({onClose, onTextChange}) => {
    return (
        <>
        <StyledModal>
            <ModalContainer>
                <ModalHeader>
                    <ModalCloseButton onClick={onClose}/>
                </ModalHeader>
                <ModalContent>
                    <div className="modalInput">
                        <div className="avatar">
                        <Avatar
                            imageUrl="https://picsum.photos/id/237/200/300"
                        />
                        </div>
                        <div className="tweetInput">
                            <textarea className="tweetInputValue" onChange={onTextChange} cols="30" rows="8" placeholder="有什麼新鮮事?"></textarea>
                        </div>
                    </div>
                </ModalContent>
                <ModalFooter>
                    <Button 
                        text="推文"
                    />
                </ModalFooter>
            </ModalContainer>
        </StyledModal>  
        </>
    )
}


export default TweetModal