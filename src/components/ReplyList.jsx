import styled from "styled-components"
import { ReplyItem } from "."

const StyledReplyList = styled.div`
    width:100%;
    min-height: 500px;
`

const ReplyList = ({repliedList}) => {
    return (
        <StyledReplyList>
            {repliedList.map(reply=>{
                return(
                    <ReplyItem
                        key={reply.id}
                        item={reply}
                    />
                )
            })}
        </StyledReplyList>
    )
}

export default ReplyList