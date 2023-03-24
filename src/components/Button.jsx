import styled from "styled-components"

const StyledButton = styled.button`
  border-style: solid;
  border-width: 1px;
  border-color: var(--main);
  border-radius: 50px;
  font-weight: 400;
  transition: border-color .5s, background-color .5s, color .5s;
  cursor: pointer;

  /* display='inline-block' */
  display: inline-block;
  /* size='regular' */
  padding: 7px 15px;
  font-size: 1.6rem;
  /* styled='filled */
  background-color: var(--main);
  color: var(--dark-0);
  &:not(:disabled):hover {
    border-color: var(--secondary-orange);
    background-color: var(--secondary-orange);
  }
  
  /* display='block */
  &.block {
    display: block;
    width: 100%;
  }
  /* size='large' */
  &.large {
    padding: 7px 23px;
    font-size: 2rem;
  }
  /* styled='outlined' */
  &.outlined {
    background-color: transparent;
    color: var(--main);
  }
  &:not(:disabled).outlined:hover {
    background-color: var(--secondary-orange);
    color: var(--dark-0);
  }
  
  &:disabled {
    opacity: .5;
    cursor: default;
  }
`;

/**
 * 按鈕
 * @param {string} type - 按鈕類型 (預設：button)
 * @param {string} display - 按鈕滿版或不是滿版 (預設：inline-block)
 * @param {string} size - 按鈕大小 (預設：regular)
 * @param {string} styled - 按鈕樣式 (預設：filled)
 * @param {boolean} disabled - disabled 屬性值，按鈕是否不可點擊 (預設：false)
 * @param {function} onClick - 處理 click 事件
 * @param {text} onClick - 按鈕文字 (預設：'')
 * @returns 
 */
const Button = ({type='button', display='inline-block', size='regular', styled='filled', disabled=false, onClick, text=''}) => {
    return (
        <StyledButton
          type={type}
          className={`${display} ${size} ${styled}`}
          onClick={(onClick) ? onClick : undefined}
          disabled={disabled}
          title={text}
          aria-label={text}
        >
          {text}
        </StyledButton>
    )
}

export default Button