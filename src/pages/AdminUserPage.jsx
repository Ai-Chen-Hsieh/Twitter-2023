import { useState, useEffect } from "react"
import { Header, AdminUserList } from "components"
import { getUsers } from "api/admin"
import { useAuth } from "contexts/AuthContext"
import Swal from "sweetalert2"

/**
 * [後台] 後台使用者列表頁
 * @returns 
 */
const AdminUserPage = () => {
    const [users, setUsers] = useState([])
    const [logoutMsg, setLogoutMsg] = useState('')
    const { logout } = useAuth()

    useEffect(() => {
        if (logoutMsg.length > 0) {
            Swal.fire({
                title: '請重新登入!',
                icon: 'info',
                html: `<p>${logoutMsg}</p>`,
                showConfirmButton: false,
                timer: 3000,
                position: 'top',
            });
            logout()
        }
    }, [logoutMsg, logout])

    useEffect(() => {
        const getUsersAsync = async () => {
            try {
                const response = await getUsers()
                const logoutStatus = [401, 403]
                
                if (logoutStatus.includes(response.status)) {
                    setLogoutMsg(response.data.message)

                } else if (response.status === 200) {
                    const users = response.data.map((user) => {
                        return {
                            ...user
                        }
                    })
                    setUsers(users)
                }
            } catch (error) {
                console.error(error)
            }
        }

        getUsersAsync()
    }, [])

    return (
        <>
            <Header text="使用者列表" />
            <AdminUserList users={users}/>
        </>
    )
}

export default AdminUserPage