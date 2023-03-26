import styled from "styled-components"
import { Input, Button } from "components"
import { useState } from "react"
import { ACLogo } from "assets/images"
import { LandingFormContainer, LandingForm, LandingFormLogoContainer, LandingFormTitle, LandingLink } from "components/common/landingRelatedPages.styled"
import Swal from "sweetalert2"
import { login } from "api/auth"
import { useNavigate } from "react-router-dom"

const StyledLinksContainer = styled.div`
    text-align: right;
    vertical-align: middle;
`

/**
 * [前台] 登入頁
 * @returns 
 */
const LoginPage = () => {
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');
    let navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
    }

    async function handleClick () {
        if (localStorage.getItem('token')) {
            localStorage.removeItem('token')
        }

        // 檢查輸入框是否未填寫
        if (account.length === 0 || password.length === 0) {
            return;
        }

        // 呼叫登入 API
        const response = await login({
            account,
            password,
            role: 'user'
        })
        console.log(response)

        // 檢查是否登入成功
        const isLogin = (response.status === 'success') ? true : false
        if (isLogin) {
            localStorage.setItem('token', response.data.token)
            navigate('/main');
            Swal.fire({
                title: '登入成功!',
                icon: 'success',
                showConfirmButton: false,
                timer: 5000,
                position: 'top',
            });

        } else {
            Swal.fire({
                title: '登入失敗!',
                icon: 'error',
                html: response.message,
                showConfirmButton: false,
                timer: 1000,
                position: 'top',
            });
        }
    }

    return (
        <LandingFormContainer>
            <LandingForm onSubmit={handleSubmit}>
                <LandingFormLogoContainer>
                    <ACLogo />
                </LandingFormLogoContainer>

                <LandingFormTitle>登入 Alphitter</LandingFormTitle>

                <Input
                    label='帳號'
                    name='account'
                    placeholder='請輸入帳號'
                    value={account}
                    onChange={(e) => { setAccount(e.target.value) }}
                    required={true}
                />
                <Input
                    label='密碼'
                    name='password'
                    type='password'
                    placeholder='請輸入密碼'
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }}
                    required={true}
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