import { Input } from "components"
import { useState } from "react"

/**
 * [前台] 登入頁
 * @returns 
 */
const LoginPage = () => {
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="container">
            <div className="row">
                <div className="col-6 mt-5">
                    <Input
                        label='帳號'
                        name='account'
                        placeholder='請輸入帳號'
                        value={account}
                        onChange={(e) => { setAccount(e.target.value); }}
                    />
                    <Input
                        label='密碼 (測試 disabled)'
                        name='password'
                        type='password'
                        placeholder='請設定密碼'
                        value={password}
                        errorMessage=''
                        disabled={true}
                        onChange={(e) => { setPassword(e.target.value); }}
                    />
                </div>
            </div>
        </div>
    )
}

export default LoginPage