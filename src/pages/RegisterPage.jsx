import { Input } from "components"
import { useState } from "react"

/**
 * [前台] 註冊頁
 * @returns 
 */
const RegisterPage = () => {
    const [account, setAccount] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="container">
            <div className="row">
                <div className="col-6 mt-5">
                    <Input
                        label='帳號 (測試有錯誤訊息)'
                        name='account'
                        placeholder='請輸入帳號'
                        value={account}
                        errorMessage='錯誤訊息'
                        onChange={(e) => { setAccount(e.target.value); }}
                    />
                    <Input
                        label='名稱 (測試限制字數)'
                        name='name'
                        placeholder='請輸入使用者名稱'
                        value={name}
                        errorMessage=''
                        maxLength={5}
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
                </div>
            </div>
        </div>
    )
}

export default RegisterPage