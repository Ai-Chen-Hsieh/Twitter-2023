//尚未完成:
//1. banner遮罩效果
//2. 上傳圖片input type="file" 
//3. input 字數超過 warning

import { useState } from "react"
import styled from "styled-components"
import { ModalWrapper, Modal, ModalHeader, ModalCloseButton, ModalTitle, ModalContent,  } from "../components/common/modal.styled";
import { Avatar, Button, Input, TextArea } from ".";
import { ReactComponent as Photo } from "assets/images/icon_image.svg"

const StyledEditContainer = styled.div`
    min-height: 500px;
    display: flex;
    flex-direction: column;
`

const StyledUserProfile = styled.div`
    flex: 1;
    max-height: 200px;
    // border:1px solid blue;
    position:relative;
`

const StyledEditBlock = styled.div`
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 60px;
`

const StyledUserBanner = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
`

const StyledAvatarContainer = styled.div`
    width: 100px;
    height: 100px;
    box-shadow: 0px 0px 0px 3px var(--dark-0);
    border-radius: 50%;

    /*position*/
    position: absolute;
    top: 100%;
    left: 20px;
    transform: translateY(-50%);
    
`

/**icon */
const StyledPhoto = styled(Photo)`
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

`
/**avatar mask遮罩 */
const AvatarCoverMask = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: absolute;
    &:hover {
        background-color: rgba(0, 0, 0, 0.4);
        transition: background-color .2s ease-out;
        ${StyledPhoto}{
            display: block;
            transition: display .2s ease-out;
        }
    }
`
/**banner mask遮罩 */
const BannerCoverMask = styled.div`
    height: 200px;
    border:1px solid red;
    &:hover {
        background-color: rgba(0, 0, 0, 0.4);
        transition: background-color .2s ease-out;
        ${StyledPhoto}{
            display: block;
            transition: display .2s ease-out;
        }
    }
`

const UserEditModal = () => {
    const [ input, setInput ] = useState('')
    const [ text, setText ] = useState('')
    const [ inputError, setInputError ] = useState('')

    function handleClick (e){
        if((input.length === 0) || (text.length === 0)){
            setInputError("不可空白")
            return
        } else if((input.length === 50) || (text.length === 160)){
            setInputError("字數不可超過50字")
            return
        } else {
            setInputError("")
        }
    }

    return (
        <ModalWrapper>
            <Modal>
                <ModalHeader>
                    <ModalCloseButton/>
                    <ModalTitle>編輯個人資料</ModalTitle>
                    <Button 
                        text="儲存"
                        onClick={handleClick}
                    />
                </ModalHeader>
                <ModalContent>
                    <StyledEditContainer>
                        <StyledUserProfile>
                            <StyledUserBanner src="https://picsum.photos/200/300/?blur=2"/>
                            <StyledAvatarContainer>
                                <AvatarCoverMask>
                                    <StyledPhoto/>                        
                                </AvatarCoverMask>
                                <Avatar imageUrl="https://picsum.photos/200/300?grayscale"/>
                            </StyledAvatarContainer>
                        </StyledUserProfile>
                        <StyledEditBlock>
                            <Input 
                                label="名稱"
                                showValueLength={true}
                                maxLength="50"
                                value={input}
                                errorMessage={inputError}
                                onChange={(e)=>{setInput(e.target.value)}}
                            />
                            <TextArea 
                                label="自我介紹"
                                showValueLength={true}
                                maxLength="160"
                                value={text}
                                onChange={(e)=> { setText(e.target.value)}}
                            />
                        </StyledEditBlock>
                    </StyledEditContainer>
                </ModalContent>
            </Modal>

        </ModalWrapper>
    )
}

export default UserEditModal