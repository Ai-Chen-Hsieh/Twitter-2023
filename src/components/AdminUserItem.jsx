import Avatar from "./Avatar"
import styled from "styled-components"

const StyledUserItem = styled.div`
    width: 100%;
`

const StyledUserItemHeader = styled.div`
    position: relative;
    height: 0;
    width: 100%;
    padding-top: 66.6666666667%;
`

const StyledUserItemAvatarWrap = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100px;
    height: 0;
    padding-top: 100%;
    border-radius: 50%;
    overflow: hidden;
`

/**
 * 使用者列表項目
 * @param {object} item - 使用者資訊 
 * @returns 
 */
const AdminUserItem = ({ item }) => {
    return(
        <div className="col-12 col-sm-6 col-md-3 col-lg-4">
            <StyledUserItem>
                <StyledUserItemHeader>
                    <StyledUserItemAvatarWrap>
                        <Avatar imageUrl={item.avatar} />
                    </StyledUserItemAvatarWrap>
                </StyledUserItemHeader>

            </StyledUserItem>
        </div>
    )
}

export default AdminUserItem