//尚未完成:
//1.. 上傳圖片input type="file" 
//2. input 字數超過 warning

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
    position:relative;
    z-index: 0;

`

const StyledEditBlock = styled.div`
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 60px;
`

const StyledBannerContainer = styled.div`
    height: 200px;
    position:relative;
    z-index: 0;
`

const StyledUserBanner = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover;
    position: absolute;
    z-index:-1;
`


const StyledAvatarContainer = styled.div`
    width: 100px;
    height: 100px;
    box-shadow: 0px 0px 0px 5px var(--dark-0);
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
    z-index: 99;
    &:hover {
        background-color: rgba(0, 0, 0, 0.4);
        transition: background-color .2s ease-out;
        cursor: pointer;
        ${StyledPhoto}{
            display: block;
            transition: display .2s ease-out;
        }
    }
`
/**banner mask遮罩 */
const BannerCoverMask = styled.div`
    height: 200px;
    &:hover {
        background-color: rgba(0, 0, 0, 0.4);
        transition: background-color .2s ease-out;
        cursor: pointer;
        ${StyledPhoto}{
            display: block;
            transition: display .2s ease-out;
        }
    }
`

const UserEditModal = ({userInfo}) => {
    const [ info, setInfo ] = useState({
        name: userInfo.name,
        introduction: userInfo.introduction
    })
    const [ inputError, setInputError ] = useState('')

    function handleChange(e){
        setInfo((prevInfo)=>{
            return{
             ...prevInfo,
             [e.target.name]: e.target.value
            }
         })
    }
    
    function handleClick (e){
        if(info.name === 0){
            setInputError((prev)=>{
                return{
                    ...prev,
                    nameLength: '不可空白'
                }
            })
            return
        } else if(inputError.introductionLength === 50){
            setInputError("字數不可超過50字")
            return
        } else {
            setInputError("")
            console.log('save')
            console.log(info)
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
                            <StyledBannerContainer>
                                <BannerCoverMask>
                                    <StyledPhoto />
                                    <StyledUserBanner src="https://picsum.photos/200/300/?blur=2"/>
                                </BannerCoverMask>
                            </StyledBannerContainer>
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
                                name='name'
                                showValueLength={true}
                                maxLength="50"
                                value={info.name}
                                errorMessage={inputError}
                                onChange={handleChange}
                            />
                            <TextArea 
                                label="自我介紹"
                                name='introduction'
                                showValueLength={true}
                                maxLength="160"
                                value={info.introduction}
                                errorMessage={inputError}
                                onChange={handleChange}
                            />
                        </StyledEditBlock>
                    </StyledEditContainer>
                </ModalContent>
            </Modal>

        </ModalWrapper>
    )
}

export default UserEditModal