import AdminUserItem from "./AdminUserItem"

/**
 * 使用者列表
 * @param {array} data 使用者列表 data 
 * @returns 
 */
const AdminUserList = ({ users }) => {
    const UserList = users.map(user => {
        return (
            <AdminUserItem
                key={user.id}
                item={user}
            />
        )
    })

    return (
        <div className="m-y-3">
            <div className="row">
                { UserList }
            </div>
        </div>
    )
}

export default AdminUserList