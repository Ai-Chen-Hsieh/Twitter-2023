// 處理 LoginPage.jsx, RegisterPage.jsx, AdminPage.jsx 的樣式
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLandingFormContainer = styled.main`
  margin-top: 44px;
  margin-bottom: 44px;
  margin-left: auto;
  margin-right: auto;
  width: calc(100% - 48px);
  max-width: 356px;
  @media screen and (min-width: 1200px){
    margin-top: 68px;
    margin-bottom: 68px;
  }
`

const StyledLandingForm = styled.form`
  margin-bottom: 16px;
`

const StyledLandingFormLogoContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 100%;
  max-width: 50px;
`

const StyledLandingFormTitle = styled.h3`
  margin-top: 20px;
  margin-bottom: 16px;
  text-align: center;
  @media screen and (min-width: 1200px){
    margin-bottom: 36px;
  }
`

const StyledLandingLink = styled(Link)`
  padding: 6px 12px;
  color: var(--primary);
  text-align: center;
  transition: color .5s;
  &:hover {
    color: var(--secondary-blue);
  }

  /* display: 'inline-block' */
  display: inline-block;

  /* display: 'block */
  &.block {
    display: block;
  }
`

export {
  StyledLandingFormContainer as LandingFormContainer,
  StyledLandingForm as LandingForm,
  StyledLandingFormLogoContainer as LandingFormLogoContainer,
  StyledLandingFormTitle as LandingFormTitle,
  StyledLandingLink as LandingLink
}