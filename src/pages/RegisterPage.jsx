// import styled from "styled-components";
import { Input, Button } from "components"
import { useState } from "react"
import { ACLogo } from "assets/images";
import { LandingFormContainer, LandingForm, LandingFormLogoContainer, LandingFormTitle, LandingLink } from "components/common/landingRelatedPages.styled";

/**
 * [前台] 註冊頁
 * @returns 
 */
const RegisterPage = () => {
    const [account, setAccount] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkPassword, setCheckPassword] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <LandingFormContainer>
            <LandingForm onSubmit={handleSubmit}>
                <LandingFormLogoContainer>
                    <ACLogo />
                </LandingFormLogoContainer>

                <LandingFormTitle>建立你的帳號</LandingFormTitle>

                <Input
                    label='帳號'
                    name='account'
                    placeholder='請輸入帳號'
                    value={account}
                    onChange={(e) => { setAccount(e.target.value); }}
                />
                <Input
                    label='名稱'
                    name='name'
                    placeholder='請輸入使用者名稱'
                    value={name}
                    errorMessage=''
                    maxLength={50}
                    onChange={(e) => { setName(e.target.value); }}
                />
                <Input
                    label='Email'
                    name='email'
                    type='email'
                    placeholder='請輸入 Email'
                    value={email}
                    errorMessage=''
                    onChange={(e) => { setEmail(e.target.value); }}
                />
                <Input
                    label='密碼'
                    name='password'
                    type='password'
                    placeholder='請設定密碼'
                    value={password}
                    errorMessage=''
                    onChange={(e) => { setPassword(e.target.value); }}
                />
                <Input
                    label='密碼確認'
                    name='passwordCheck'
                    type='password'
                    placeholder='請再次輸入密碼'
                    value={checkPassword}
                    errorMessage=''
                    onChange={(e) => { setCheckPassword(e.target.value); }}
                />

                <Button
                    type='submit'
                    size='large'
                    display='block'
                    text='註冊'
                />
            </LandingForm>

            <LandingLink to="/login" className="block">
                取消
            </LandingLink>
        </LandingFormContainer>
    )
}

export default RegisterPage