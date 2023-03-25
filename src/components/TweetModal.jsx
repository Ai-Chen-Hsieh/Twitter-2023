//尚未完成推文不能空白
import { useState } from "react";
import styled from "styled-components";
import { ModalWrapper, Modal, ModalHeader, ModalCloseButton, ModalContent, ModalFooter, ModalWarning } from "../components/common/modal.styled";
import { Button, Avatar } from "../components"


const StyledTweetModal = styled.div`
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

const ButtonPanel = (inputValue) => {
    if(inputValue.length === 0) {
        return(
        <>
            <ModalWarning>字數不可超過140字</ModalWarning>
            <Button 
                disabled={true}
                text="推文"
            />
        </>
        )
    } else if (inputValue.length > 140 ){
        return(
            <>
                <ModalWarning>字數不可超過140字</ModalWarning>
                <Button 
                    disabled={true}
                    text="推文"
                />
            </>
            )
    } else{
        return(
            <Button 
                text="推文"
            />
        )
    }
}

const TweetModal = ({onClose}) => {
    const [ inputValue, setInputValue ] = useState('initial')

    return (
        <>
        <StyledTweetModal>
            <ModalWrapper>
                <Modal>
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
                                <textarea 
                                className="tweetInputValue" 
                                onChange={(event)=>{
                                    setInputValue(event.target.value)
                                }} 
                                cols="30" 
                                rows="8" 
                                placeholder="有什麼新鮮事?"
                                ></textarea>
                            </div>
                        </div>
                    </ModalContent>
                    <ModalFooter>
                        <ButtonPanel
                            onClick={inputValue}
                        />
                        {/* {limitedText ? (
                            <>
                                <ModalWarning>字數不可超過140字</ModalWarning>
                                <Button 
                                    disabled={true}
                                    text="推文"
                                />
                            </>
                        ) : (
                            <Button 
                                text="推文"
                            />
                        )} */}
                    </ModalFooter>
                </Modal>
            </ModalWrapper>
        </StyledTweetModal>  
        </>
    )
}


export default TweetModal