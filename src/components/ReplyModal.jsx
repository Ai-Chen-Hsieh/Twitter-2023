import styled from "styled-components";
import { useState } from "react";
import { ModalWrapper, Modal, ModalHeader, ModalCloseButton, ModalContent, ModalFooter, ModalWarning } from "components/common/modal.styled";
import { Button, Avatar, TweetInput, DateDiffFormatter } from ".";

const StyledReplyContainer= styled.div`
    min-height: 150px;
    display: flex;
    text-align: start;
    padding-top: 10px;
    padding-right: 10px;
    padding-left: 10px;  
    position: relative;
`

const StyledReplyAvatar = styled.div`
    width: 50px;
    height: 50px;
`
const StyledConnect = styled.span`
    display: block;
    width: 2px;
    background-color: var(--gray-40); 
    position: absolute;
    top: 70px;
    bottom: 0;
    left: 35px;
`

const StyledReplyBlock = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 5px 5px 5px;
    flex: 1;
`

const StyledReplyContent = styled.div`
    flex: 1;
`

const StyledReplyTo = styled.span`
    display: inline-block;
    color: var(--gray-100);
    font-size: 1.3rem;
    .replyAccount{
        color: var(--main);
    }
`

const StyledUser = styled.div`
    display: flex;

    .name{
        font-size: 1.6rem;
        font-weight: 700;
        margin-right: 7px;
        display:-webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow:hidden;
    }
    .account{
        font-size: 1.4rem;
        color: var(--dark-70);
        flex: 1;
        display:-webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
        overflow:hidden;
    }
`

const TweetContent = ({user}) => {
    return(
        <StyledReplyContainer>
            <StyledReplyAvatar>
                <Avatar imageUrl={user.avatar}/>
            </StyledReplyAvatar>
            <StyledConnect/>
            <StyledReplyBlock>
                <StyledUser>
                    <span className="name">{user.name}</span>
                    <span className="account">@{user.account}・<DateDiffFormatter date={user.createdAt} /></span>
                </StyledUser>
                <StyledReplyContent>
                    {user.description}
                </StyledReplyContent>
                <StyledReplyTo>回覆給<span className="replyAccount"> @{user.account}</span></StyledReplyTo>

            </StyledReplyBlock>
        </StyledReplyContainer>
    )
}

const ReplyModal = ({userInfo, tweet ,onClose, onReplyTweet}) => {
    const [ inputValue, setInputValue ] = useState('')
    const [ errorMessage, setErrorMessage] = useState('')

    // 新增推文回復
    async function handleClick(){
        if(inputValue.trim().length === 0){
            setErrorMessage('內容不可空白')
            return

        } else {
            setErrorMessage('')
            await onReplyTweet({
                tweetId: tweet.id,
                comment: inputValue
            })
        }
    }

    function handleChange (input) {
        setInputValue(input)
    }

    return (
        <>
        <ModalWrapper>
            <Modal>
                <ModalHeader>
                    <ModalCloseButton onClick={onClose}/>
                </ModalHeader>
                <ModalContent>
                    <TweetContent
                        user={tweet}
                    />
                    <TweetInput 
                        onChange={handleChange} 
                        placeholder="推你的回覆"
                    >
                        <Avatar imageUrl={userInfo.avatar}/>
                    </TweetInput>
                </ModalContent>
                <ModalFooter>
                    {(errorMessage.length > 0 ) && 
                        <ModalWarning>{errorMessage}</ModalWarning>
                    }
                    <Button
                        onClick={handleClick}
                        text="回覆"
                    />
                </ModalFooter>
            </Modal>
        </ModalWrapper>
        </>
    )
}

export default ReplyModal