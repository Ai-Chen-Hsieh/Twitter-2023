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
    
    // 隱藏input
    #avatarInput{
        visibility: hidden;
        position: absolute;
    }
    
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
const AvatarCoverMask = styled.label`
    display: block;
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
const BannerCoverMask = styled.label`
    display:block;
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

    // 隱藏input
    #bannerInput{
        visibility: hidden;
        position: absolute;
    }
`
const UserEditModal = ({onClose, userInfo}) => {

    //假資料
    const [ info, setInfo ] = useState(userInfo)
    const [ inputError, setInputError ] = useState({
        name: '',
        introduction: ''
    })

    function handleChange(e){
        if(e.target.value.length === 50){
            setInputError((prevError)=>{
                return{
                    ...prevError,
                    name: '不可超過50字'
                }
            })
        } else if(e.target.value.length === 0){
            setInputError((prevError)=>{
                return{
                    ...prevError,
                    [e.target.name]: '不可空白'
                }
            })
        } else if (e.target.value.length === 160){
            setInputError((prevError)=>{
                return{
                    ...prevError,
                    introduction: '字數不可超過160字'
                }
            })
        }else{
            setInputError((prevError)=>{
                return{
                    ...prevError,
                    [e.target.name]: ''
                }
            })
        }
        setInfo((prevInfo)=>{
            return{
             ...prevInfo,
             [e.target.name]: e.target.value
            }
         })

    }

    
    function handleClick (e){
        const {name, introduction } = inputError
        if((name.length > 0) || (introduction.length > 0)){
            console.log('error')
            return
        } else {
            console.log('save')
        }
    }

    return (
        <ModalWrapper>
            <Modal>
                <ModalHeader>
                    <ModalCloseButton onClick={onClose}/>
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
                                <BannerCoverMask htmlFor="bannerInput">
                                    <StyledPhoto />
                                    <StyledUserBanner src={userInfo.cover}/>
                                    <input name="bannerInput" id="bannerInput" type="file" accept="image/png, image/jpeg, image/jpg" />
                                </BannerCoverMask>
                            </StyledBannerContainer>
                            <StyledAvatarContainer>
                                <AvatarCoverMask htmlFor="avatarInput">
                                    <StyledPhoto/>                        
                                </AvatarCoverMask>
                                <Avatar imageUrl={userInfo.avatar}/>
                                <input name="avatarInput" id="avatarInput" type="file" accept="image/png, image/jpeg, image/jpg" />
                            </StyledAvatarContainer>
                        </StyledUserProfile>
                        <StyledEditBlock>
                            <Input 
                                label="名稱"
                                name='name'
                                showValueLength={true}
                                maxLength="50"
                                value={info.name}
                                errorMessage={inputError.name}
                                onChange={handleChange}
                            />
                            <TextArea 
                                label="自我介紹"
                                name='introduction'
                                showValueLength={true}
                                maxLength="160"
                                value={info.introduction}
                                errorMessage={inputError.introduction}
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