import { useState, useEffect } from "react"
import { Header, AdminUserList } from "components"
import { getUsers } from "api/admin"

/**
 * [後台] 後台使用者列表頁
 * @returns 
 */
const AdminUserPage = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const getUsersAsync = async () => {
            try {
                const users = await getUsers()
                setUsers(
                    users.map((user) => {
                        return {
                            ...user
                        }
                    })
                )
                
                console.log(users);
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