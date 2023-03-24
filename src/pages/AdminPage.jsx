import styled from "styled-components";
import { Input, Button } from "components"
import { useState } from "react"
import { ACLogo } from "assets/images";
import { LandingFormContainer, LandingForm, LandingFormLogoContainer, LandingFormTitle, LandingLink } from "components/common/landingRelatedPages.styled";

const StyledLinksContainer = styled.div`
    text-align: right;
    vertical-align: middle;
`

/**
 * [後台] 登入頁
 * @returns 
 */
const AdminPage = () => {
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <LandingFormContainer>
            <LandingForm onSubmit={handleSubmit}>
                <LandingFormLogoContainer>
                    <ACLogo />
                </LandingFormLogoContainer>

                <LandingFormTitle>後台登入</LandingFormTitle>

                <Input
                    label='帳號'
                    name='account'
                    placeholder='請輸入帳號'
                    value={account}
                    onChange={(e) => { setAccount(e.target.value); }}
                />
                <Input
                    label='密碼'
                    name='password'
                    type='password'
                    placeholder='請輸入密碼'
                    value={password}
                    onChange={(e) => { setPassword(e.target.value); }}
                />
                <Button
                    type='submit'
                    size='large'
                    display='block'
                    text='登入'
                />
            </LandingForm>

            <StyledLinksContainer>
                <LandingLink to="/login" title="前台登入" aria-label="前台登入">
                    前台登入
                </LandingLink>
            </StyledLinksContainer>
        </LandingFormContainer>
    )
}

export default AdminPage