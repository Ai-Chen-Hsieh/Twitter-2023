// 處理共用 Component UserHeader.jsx 和 Header.jsx 容器樣式
import styled from "styled-components";

const StyledHeaderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  height: 74px;
  border-bottom: 1px solid #E6ECF0;
  background-color: #fff;
`;

export {
  StyledHeaderContainer as HeaderContainer
}