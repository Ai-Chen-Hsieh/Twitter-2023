import styled from "styled-components"
import AdminUserItem from "./AdminUserItem"

const StyledUserList = styled.div`
    max-width: 920px;
`

/**
 * 使用者列表
 * @param {array} data 使用者列表 data 
 * @returns 
 */
const AdminUserList = ({ users }) => {
    let UserList = <></>

    if (users.length > 0) {
        UserList = users.map(user => {
            return (
                <AdminUserItem
                    key={user.id}
                    user={user}
                />
            )
        })
    }

    return (
        <StyledUserList className="my-3 px-3">
            <div className="row">
                { UserList }
            </div>
        </StyledUserList>
    )
}

export default AdminUserList