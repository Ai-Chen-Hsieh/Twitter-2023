import styled from "styled-components";

const StyledModalWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);

    /*position*/
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
`

const StyledModal = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
    max-width: 650px;
    min-height: 200px;
    border:1px solid var(--gray-20); 
    border-radius: 10px;
    background-color: var(--dark-0);

    /*position*/
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
    margin: auto;
`

const StyledModalHeader = styled.div`
    width: 100%;
    height: 50px;
    border-bottom: 1px solid var(--gray-20);
    display: flex;
    align-items: center;    
`

const StyledCloseButton = styled.div`
    display:inline-block;
    width: 40px;
    height: 40px;
    margin-top: 4px;
    margin-bottom: 4px;
    margin-left: 5px;
    border-radius: 50%;
    color: var(--main);
    cursor: pointer;
    position: relative;

    &:hover {
        background-color: var(--dark-30);
    }

    &:before {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        content: "\u0058";
        color: var(--main);
    }
`

const StyledModalContent = styled.div`
    width: 100%;
    flex: 1;
    
`

const StyledModalFooter = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0 5px;
`

const StyledModalHeaderTitle = styled.span`
    display: inline-block;
    line-height: 50px;
    width: calc(100% - 130px);
    margin-left: 5px;
    font-size: 1.8rem;
    font-weight: 700;
`

const StyledModalFooterWarning = styled.span`
    display: inline-block;
    line-height: 50px;
    text-align: end;
    width: calc(100% - 130px);
    margin: 0 10px;
    font-size: 1.5rem;
    color: var(--error);
`

export { 
    StyledModalWrapper as ModalWrapper,
    StyledModal as Modal,
    StyledModalHeader as ModalHeader,
    StyledCloseButton as ModalCloseButton,
    StyledModalContent as ModalContent,
    StyledModalFooter as ModalFooter,
    StyledModalHeaderTitle as ModalTitle,
    StyledModalFooterWarning as ModalWarning
}