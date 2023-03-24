import styled from "styled-components"
import { ReplyItem } from "."
import { dummyUserReplyList } from "../testData/dummyUserReplyList"

const StyledReplyList = styled.div`
    width:100%;
    min-height: 500px;
`

const ReplyList = () => {
    return (
        <StyledReplyList>
            {dummyUserReplyList.map(reply=>{
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