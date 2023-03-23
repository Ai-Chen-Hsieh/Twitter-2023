import { Input, Button } from "components"
import { useState } from "react"

/**
 * [前台] 登入頁
 * @returns 
 */
const LoginPage = () => {
    const [account, setAccount] = useState('');
    const [password, setPassword] = useState('');

    function handleClick() {
        alert('test button click.');
    }

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
                    <Button
                        type='submit'
                        size='large'
                        display='block'
                        text='登入'
                    />
                    <Button
                        type='submit'
                        display='block'
                        text='登入'
                    />
                    <Button
                        type='submit'
                        size='large'
                        text='測試 click 事件'
                        onClick={handleClick}
                    />
                    <Button
                        type='submit'
                        size='large'
                        text='測試 click 事件 (disabled)'
                        disabled={true}
                        onClick={handleClick}
                    />
                    <Button
                        text='登入'
                    />
                    <Button
                        type='submit'
                        size='large'
                        styled='outlined'
                        display='block'
                        text='登入'
                    />
                    <Button
                        type='submit'
                        styled='outlined'
                        display='block'
                        text='登入'
                    />
                    <Button
                        size='large'
                        styled='outlined'
                        text='登入'
                    />
                    <Button
                        styled='outlined'
                        text='登入'
                    />
                    <Button
                        styled='outlined'
                        text='登入'
                        disabled={true}
                    />
                </div>
            </div>
        </div>
    )
}

export default LoginPage