import styled from "styled-components";
import { Input, Button } from "components"
import { useState } from "react"
import { ACLogo } from "assets/images";
import { LandingFormContainer, LandingForm, LandingFormLogoContainer, LandingFormTitle, LandingLink } from "components/common/landingRelatedPages.styled";
import { login } from "api/login";

const StyledLinksContainer = styled.div`
    text-align: right;
    vertical-align: middle;
`

/**
 * [前台] 登入頁
 * @returns 
 */
const LoginPage = () => {
    // const [account, setAccount] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault()
        
    }

    async function handleClick () {
        const res = await login({
            email,
            password
        })
        console.log(res)
    }

    return (
        <LandingFormContainer>
            <LandingForm onSubmit={handleSubmit}>
                <LandingFormLogoContainer>
                    <ACLogo />
                </LandingFormLogoContainer>

                <LandingFormTitle>登入 Alphitter</LandingFormTitle>

                {/* <Input
                    label='帳號'
                    name='account'
                    placeholder='請輸入帳號'
                    value={account}
                    onChange={(e) => { setAccount(e.target.value); }}
                /> */}
                <Input
                    label='Email'
                    name='email'
                    type='email'
                    placeholder='請輸入 Email'
                    value={email}
                    required={true}
                    onChange={(e) => { setEmail(e.target.value); }}
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
                    onClick={handleClick}
                />
            </LandingForm>

            <StyledLinksContainer>
                <LandingLink to="/register" title="註冊" aria-label="註冊">
                    註冊
                </LandingLink>
                ・
                <LandingLink to="/admin" title="後台登入" aria-label="後台登入">
                    後台登入
                </LandingLink>
            </StyledLinksContainer>
        </LandingFormContainer>
    )
}

export default LoginPage