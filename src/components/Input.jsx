
import styled from "styled-components"
import clsx from "clsx"

const StyledInputContainer = styled.div`
    background-color: var(--gray-0);
    border-radius: 2px;
    overflow: hidden;
`

const StyledInputLabel = styled.label`
    display: block;
    color: var(--dark-80);
    font-size: var(--fz-secondary);
    padding-top: 2px;
    padding-bottom: 0px;
    padding-left: 16px;
    padding-right: 16px;
`;

const StyledInput = styled.input`
    padding-top: 2px;
    padding-bottom: 4px;
    padding-left: 16px;
    padding-right: 16px;
    outline: none;
    border: none;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-bottom-color: var(--gray-100);
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

const StyledInputNoteContainer = styled.div`
    margin-top: 4px;
    min-height: 20px;
    margin-bottom: 12px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

const StyledInputErrorMessage = styled.small`
    color: var(--error);
    font-weight: 500;
    max-width: 50%;
`

const StyledInputValueLength = styled.small`
    color: var(--dark-80);
    max-width: 50%;
`


/**
 * 輸入框
 * @param {string} label - label 標籤文字 (預設：'')
 * @param {string} type - type 屬性值 (預設：'text')
 * @param {string} name - name 屬性值
 * @param {string} id - id 屬性值 (預設：跟 name 一樣)
 * @param {string} value - defaultValue 屬性值  (預設：'')
 * @param {string} placeholder - 提示文字 (預設：'')
 * @param {boolean} disabled - disabled 屬性值，輸入框是否不可編輯 (預設：false)
 * @param {string} errorMessage - 錯誤訊息 (預設：'')
 * @param {boolean} maxLength - 限制輸入字數長度 (預設：0)
 * @param {function} onChange - 處理當 value 改變
 * @returns 
 */
const Input = ({label='', type='text', name, id=name, value='', placeholder, disabled=false, errorMessage='', maxLength=0, onChange}) => {
    return (
        <>
            <StyledInputContainer>
                <StyledInputLabel htmlFor={id}>
                    {label}
                </StyledInputLabel>
                <StyledInput
                    id={id}
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    maxLength={(maxLength > 0) ? maxLength : undefined}
                    onChange={onChange}
                    disabled={disabled}
                    className={clsx('', {error: errorMessage.length > 0})}
                />
            </StyledInputContainer>
            <StyledInputNoteContainer>
                <StyledInputErrorMessage>{errorMessage}</StyledInputErrorMessage>
                { (maxLength > 0) && <StyledInputValueLength> 0/{maxLength}</StyledInputValueLength> }
            </StyledInputNoteContainer>
        </>
    )
}

export default Input