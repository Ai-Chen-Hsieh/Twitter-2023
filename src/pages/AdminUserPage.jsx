import { Header, AdminUserList } from "components"
import { dummyAdminUsers } from "testData/dummyAdminUsers"

/**
 * [後台] 後台使用者列表頁
 * @returns 
 */
const AdminUserPage = () => {
    return (
        <>
            <Header text="使用者列表" />
            <AdminUserList users={dummyAdminUsers}/>
        </>
    )
}

export default AdminUserPage