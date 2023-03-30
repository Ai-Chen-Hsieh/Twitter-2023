//尚未完成推文不能空白
import { useState } from "react";
import styled from "styled-components";
import { ModalWrapper, Modal, ModalHeader, ModalCloseButton, ModalContent, ModalFooter, ModalWarning } from "../components/common/modal.styled";
import { Button, Avatar, TweetInput } from "../components"


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

const TweetModal = ({onClose, userInfo}) => {
    const [ inputValue, setInputValue ] = useState('')
    const [ errorMessage, setErrorMessage ] = useState('')

    function handleClick(){
        if(inputValue.trim().length === 0){
            setErrorMessage('內容不可空白')
            return
        } else if(inputValue.length === 140 ){
            setErrorMessage('字數不可超過140字')
            return
        } else {
            setErrorMessage('')
        }
    }

    function handleChange (input) {
        setInputValue(input)
    }

    return (
        <StyledTweetModal>
            <ModalWrapper>
                <Modal>
                    <ModalHeader>
                        <ModalCloseButton onClick={onClose}/>
                    </ModalHeader>
                    <ModalContent>
                        <TweetInput onChange={handleChange} >
                            <Avatar imageUrl={userInfo.avatar} />
                        </TweetInput>
                    </ModalContent>
                    <ModalFooter>
                        {(errorMessage.length > 0 ) && 
                            <ModalWarning>{errorMessage}</ModalWarning>
                        }
                            <Button 
                                onClick={handleClick}
                                text="推文"
                            />
                    </ModalFooter>
                </Modal>
            </ModalWrapper>
        </StyledTweetModal>  
    )
}


export default TweetModal