import styled from "styled-components"
import clsx from "clsx";

const StyledTextContainer = styled.div`
    background-color: var(--gray-0);
    border-radius: 2px;
    overflow: hidden;
`

const StyledTextLabel = styled.label`
    display: block;
    color: var(--dark-80);
    font-size: var(--fz-secondary);
    padding-top: 2px;
    padding-bottom: 0px;
    padding-left: 16px;
    padding-right: 16px;
`;

const StyledTextArea = styled.textarea`
    padding-top: 2px;
    padding-bottom: 4px;
    padding-left: 16px;
    padding-right: 16px;
    outline: none;
    border: none;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: var(--gray-100);
    resize:none;
    width: 100%;
    font-size: var(--fz-regular);
    background-color: transparent;
    transition: border-bottom-color .5s;
    &:not(:disabled).error {
        border-bottom-color: var(--error);
    }
    &:not(:disabled):hover,
    &:not(:disabled):focus {
        border-bottom-color: var(--secondary-blue);
    }
    &:disabled {
        border-bottom-color: var(--dark-50);
    }
    ::placeholder {
        color: var(--dark-60);
        opacity: 1;
    }
    :-ms-input-placeholder {
        color: var(--dark-60);
    }
    ::-ms-input-placeholder {
        color: var(--dark-60);
    }
`
const StyledTextNoteContainer = styled.div`
    margin-top: 4px;
    min-height: 20px;
    margin-bottom: 12px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const StyledTextErrorMessage = styled.small`
    color: var(--error);
    font-weight: 500;
    max-width: 50%;
`

const StyledTextValueLength = styled.small`
    color: var(--dark-80);
    max-width: 50%;
`

const TextArea = ({label='', type='text', name, id=name, value='', cols="10", rows="6", placeholder, disabled=false, errorMessage='', showValueLength=false , maxLength=0, onChange}) => {
    return (
        <>
            <StyledTextContainer>
                <StyledTextLabel htmlFor={id}>
                    {label}
                </StyledTextLabel>
                <StyledTextArea
                    id={id}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    maxLength={(maxLength > 0) ? maxLength : undefined}
                    onChange={onChange}
                    disabled={disabled}
                    rows={rows}
                    cols={cols}
                    className={clsx('', {error: errorMessage.length > 0})}
                />
            </StyledTextContainer>
            <StyledTextNoteContainer>
                <StyledTextErrorMessage>{errorMessage}</StyledTextErrorMessage>
                { (showValueLength) && <StyledTextValueLength> {value.length}/{maxLength}</StyledTextValueLength> }
            </StyledTextNoteContainer>
        </>
    )
}

export default TextArea