import { axiosInstance, baseUrl } from "./base"


export const editAccount = async(payload) => {

  try{
    const {account,name,email,password,checkPassword} = 
    payload;
    const response = await axiosInstance.put(`${baseUrl}/api/users/14/account`, {
      account,
      name,
      email,
      password,
      checkPassword
    });
    console.log(response)
    return response.status
  } catch(error){
    console.error('[Edit Account failed]: ', error)
  }
}
