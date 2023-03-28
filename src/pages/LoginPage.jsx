import styled from "styled-components"
import { Input, Button } from "components"
import { useState, useEffect } from "react"
import { ACLogo } from "assets/images"
import { LandingFormContainer, LandingForm, LandingFormLogoContainer, LandingFormTitle, LandingLink } from "components/common/landingRelatedPages.styled"
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"
import { useAuth } from "contexts/AuthContext"

const StyledLinksContainer = styled.div`
    text-align: right;
    vertical-align: middle;
`

/**
 * [前台] 登入頁
 * @returns 
 */
const LoginPage = () => {
    const [account, setAccount] = useState('')
    const [password, setPassword] = useState('')
    const [disabledSubmitBtn, setDisabledSubmitBtn] = useState(false)
    const { hasToken, userLogin, currentRegistrant } = useAuth()
    let navigate = useNavigate()

    // 檢查是否有 token
    // 有 -> (使用者) 導到首頁； (管理者) 導到後台推文清單
    // 無 -> 停留在此頁
    useEffect(() => {
        if (hasToken) {
            if (currentRegistrant.role === 'admin') {
                navigate('/admin_main');
            } else {
                navigate('/main');
            }
        }
    }, [navigate, hasToken, currentRegistrant]);
    
    // 阻止表單提交
    function handleSubmit(e) {
        e.preventDefault()
    }

    // 處理按下登入按鈕
    async function handleClick () {
        // 避免使用者在 API 還沒回傳資料前 再次點擊按鈕
        setDisabledSubmitBtn(true)

        // 檢查輸入框是否未填寫
        if (account.length === 0 || password.length === 0) {
            setDisabledSubmitBtn(false)
            return;
        }

        // 呼叫登入 API
        const response = await userLogin({
            account,
            password
        })

        // 檢查是否登入成功
        const isLogin = (response.status === 'success') ? true : false
        if (isLogin) {
            Swal.fire({
                title: '登入成功!',
                icon: 'success',
                showConfirmButton: false,
                timer: 3000,
                position: 'top',
            });
            
        } else {
            setDisabledSubmitBtn(false)
            Swal.fire({
                title: '登入失敗!',
                icon: 'error',
                html: `<p>${response.message}</p>`,
                showConfirmButton: false,
                timer: 3000,
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
                    disabled={disabledSubmitBtn}
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