import { axiosInstance, baseUrl} from "./base"

export const editAccount = async(payload) => {
  const { userId, account, name, email, password, checkPassword } = 
    payload;

  try {
    const response = await axiosInstance.put(`${baseUrl}/api/users/${userId}/account`, {
      account,
      name,
      email,
      password,
      checkPassword
    });
    return response.data
  } catch(error){
    console.error('[Edit Account failed]: ', error)
    return error.response.data
  }
} 
