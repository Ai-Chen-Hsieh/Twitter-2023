// 處理 LoginPage.jsx, RegisterPage.jsx, AdminPage.jsx 的 form 樣式
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

export {
  StyledLandingFormContainer as LandingFormContainer,
  StyledLandingFormLogoContainer as LandingFormLogoContainer,
  StyledLandingFormTitle as LandingFormTitle
}
