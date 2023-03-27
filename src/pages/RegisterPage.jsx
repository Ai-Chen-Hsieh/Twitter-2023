import { useNavigate } from "react-router-dom"
import { Input, Button } from "components"
import { useState, useEffect } from "react"
import { ACLogo } from "assets/images"
import { LandingFormContainer, LandingForm, LandingFormLogoContainer, LandingFormTitle, LandingLink } from "components/common/landingRelatedPages.styled"
import { useAuth } from "contexts/AuthContext"
import Swal from "sweetalert2"

/**
 * [前台] 註冊頁
 * @returns 
 */
const RegisterPage = () => {
    const [account, setAccount] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [checkPassword, setCheckPassword] = useState('')
    const [disabledSubmitBtn, setDisabledSubmitBtn] = useState(false)
    const { hasToken, currentRegistrant, register } = useAuth()
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
    }, [hasToken, navigate, currentRegistrant])

    // 阻止表單提交
    async function handleSubmit(e) {
        e.preventDefault()
    }

    // 處理按下註冊按鈕
    async function handleClick() {
        // 避免使用者在 API 還沒回傳資料前 再次點擊按鈕
        setDisabledSubmitBtn(true)

        // 檢查輸入框是否未填寫
        if (account.length === 0 || name.length === 0 || email.length === 0 || password.length === 0 || checkPassword.length === 0) {
            setDisabledSubmitBtn(false)
            return;
        }

        // 呼叫註冊 API
        const response = await register({
            account,
            name,
            email,
            password,
            checkPassword
        })

        const isRegister = (response.status === 'success') ? true : false
        if (isRegister) {
            Swal.fire({
                title: '註冊成功!',
                icon: 'success',
                showConfirmButton: false,
                timer: 3000,
                position: 'top',
            });
            navigate('/login');

        } else {
            setDisabledSubmitBtn(false)
            let errorMsgHtml = ''
            for (let error of response.errors) {
                errorMsgHtml += error + '<br/>'
            }
            
            Swal.fire({
                title: '註冊失敗!',
                icon: 'error',
                html: `<p>${errorMsgHtml}</p>`,
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

                <LandingFormTitle>建立你的帳號</LandingFormTitle>

                <Input
                    label='帳號'
                    name='account'
                    placeholder='請輸入帳號'
                    value={account}
                    required={true}
                    onChange={(e) => { setAccount(e.target.value) }}
                />
                <Input
                    label='名稱'
                    name='name'
                    placeholder='請輸入使用者名稱'
                    value={name}
                    required={true}
                    maxLength={50}
                    onChange={(e) => { setName(e.target.value) }}
                />
                <Input
                    label='Email'
                    name='email'
                    type='email'
                    placeholder='請輸入 Email'
                    value={email}
                    required={true}
                    onChange={(e) => { setEmail(e.target.value) }}
                />
                <Input
                    label='密碼'
                    name='password'
                    type='password'
                    placeholder='請設定密碼'
                    value={password}
                    required={true}
                    onChange={(e) => { setPassword(e.target.value) }}
                />
                <Input
                    label='密碼確認'
                    name='passwordCheck'
                    type='password'
                    placeholder='請再次輸入密碼'
                    value={checkPassword}
                    required={true}
                    onChange={(e) => { setCheckPassword(e.target.value) }}
                />

                <Button
                    type='submit'
                    size='large'
                    display='block'
                    text='註冊'
                    onClick={handleClick}
                    disabled={disabledSubmitBtn}
                />
            </LandingForm>

            <LandingLink to="/login" className="block">
                取消
            </LandingLink>
        </LandingFormContainer>
    )
}

export default RegisterPage