import styled from "styled-components"
import { Avatar } from "."

const StyledItemContainer = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    border-bottom: 1px solid var(--gray-20);
    padding: 16px 48px 16px 24px;
`

const StyledItemAvatarContainer = styled.div`
    width: 50px;
    height: 50px;
`

const StyledItemInfosContainer = styled.div`
    width: calc(100% - 58px);
`

const StyledItemDeleteButton = styled.button`
    position: absolute;
    display: block;
    top: 0;
    right: 0;
    width: 48px;
    height: 48px;
    border: none;
    background-color: transparent;
    cursor: pointer;

    &:hover {
        &::before,
        &::after {
            background-color: var(--main);
        }
    }

    &::before,
    &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        display: block;
        width: 16px;
        height: 2px;
        background-color: var(--dark-80);
        border-radius: 2px;
        transform-origin: center center;
        transition: background-color .5s;
    }
    &::before {
        transform: rotate(45deg);
    }
    &::after {
        transform: rotate(-45deg);
    }
`


/**
 * [後台] 推文清單項目
 * @param {object} item - 推文清單項目
 * @param {function} onDelete - 處理刪除推文
 * @returns 
 */
const AdminTweetItem = ({ item, onDelete }) => {
    let description = item.description

    // 可以直接在清單上快覽 Tweet 的前 50 個字 ?
    if (description.length > 50) {
        description = `${item.description.slice(0, 50)}...`
    }

    return(
        <StyledItemContainer>
            <StyledItemAvatarContainer>
                <Avatar imageUrl={item.avatar} />
            </StyledItemAvatarContainer>
            <StyledItemInfosContainer>
                <header className="mb-2">
                    <h6 className="d-inline-block me-2">{item.name}</h6>
                    <span className="text-fz-secondary color-secondary">
                        @{item.account}・{item.createdAt}
                    </span>
                </header>
                <p>{description}</p>
            </StyledItemInfosContainer>

            <StyledItemDeleteButton
                type="button"
                title="刪除此貼文"
                aria-label="刪除此貼文"
                onClick={() => {
                    onDelete?.(item.id)
                }}
            />
        </StyledItemContainer>
    )
}

export default AdminTweetItem