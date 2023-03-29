import styled from "styled-components"
import { Input, Button, Header } from "components"
import { useState } from "react"
import { editAccount} from "api/editAccount"
import Swal from "sweetalert2"


const SettingFormContainer = styled.div`
  width:100%;
  height: 100%;
`

const SettingForm = styled.div`
  width: 100%;
  position: relative;
  padding: 24px;
`

const StyledButtonWrapper = styled.div`
  position: absolute;
  right: 23px;
  Button { 
    cursor: pointer;
  }
`


/**
 * [前台] 設定頁
 * @returns 
 */
const SettingPage = () => {

    const [account, setAccount] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [checkPassword, setCheckPassword] = useState('')
    
    // function handleSubmit(e) {
    //     e.preventDefault()
    // }
    
    // 按下儲存按鈕
    async function handleSave () {

      //檢查輸入框是否未填寫
      if (account.length === 0 || name.length === 0 || email.length ===0 || password.length === 0 ||checkPassword ===0){
        return;
      }

      // 呼叫 SetAccount API
      const response = await editAccount ({
      account,
      name,
      email,
      password,
      checkPassword
      })
      
      // 檢查是否儲存成功
      const isSaved = (response.status === 'success') ? true : false
       if (isSaved) {
        Swal.fire({
                title: '登入成功!',
                icon: 'success',
                showConfirmButton: false,
                timer: 3000,
                position: 'top',
            });
       } else {
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
            <SettingFormContainer>           
                <Header text='帳戶設定'/>
                <SettingForm>
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
                    label='密碼再確認'
                    name='passwordCheck'
                    type='password'
                    placeholder='請再次輸入密碼'
                    value={checkPassword}
                    required={true}
                    onChange={(e) => { setCheckPassword(e.target.value) }}
                />
               <StyledButtonWrapper>
                <Button
                    type='submit'
                    text='儲存'
                    size = 'large'
                    onClick = {handleSave}
                />
              </StyledButtonWrapper>
              </SettingForm>
            </SettingFormContainer>
    )
}

export default SettingPage
