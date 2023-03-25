import styled from "styled-components";

const StyledModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    max-width: 650px;
    max-height: 500px;
    border:1px solid var(--gray-20); 
    border-radius: 10px;
`

const StyledModalHeader = styled.div`
    width: 100%;
    height: 50px;
    border-bottom: 1px solid var(--gray-20);
    display: flex;
    align-items: center;

    .title{
        display: inline-block;
        line-height: 50px;
        width: calc(100% - 130px);
        margin-left: 5px;
        font-size: 1.8rem;
        font-weight: 700;
    }
    
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

    .warning{
        display: inline-block;
        line-height: 50px;
        text-align: end;
        width: calc(100% - 130px);
        margin: 0 10px;
        font-size: 1.5rem;
        color: var(--error);
    }
`

export { 
    StyledModalContainer as ModalContainer,
    StyledModalHeader as ModalHeader,
    StyledCloseButton as ModalCloseButton,
    StyledModalContent as ModalContent,
    StyledModalFooter as ModalFooter
}