import Avatar from "./Avatar"
import styled from "styled-components"

const StyledUserItem = styled.div`
    width: 100%;
    border-radius: 10px;
    overflow: hidden;
    background-color: #F6F7F8;
`

const StyledUserItemHeader = styled.div`
    position: relative;
    height: 0;
    width: 100%;
    padding-top: 66.6666666667%;
    background-color: var(--dark-30);
`

const StyledUserItemAvatarWrap = styled.div`
    position: absolute;
    bottom: -24px;
    left: calc(50% - 50px);
    width: 100px;
    height: 100px;
    padding: 4px;
    border-radius: 50%;
    background-color: var(--dark-0);
    overflow: hidden;

    > img {
        display: block;
    }
`

const StyledUserItemBody = styled.div`
    padding: 24px;
    text-align:center;
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
                <StyledUserItemBody>
                    <h6 className="mt-2">{item.name}</h6>
                    <small className=""></small>
                </StyledUserItemBody>
            </StyledUserItem>
        </div>
    )
}

export default AdminUserItem