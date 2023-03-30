import styled from "styled-components"
import { ReplyItem } from "."

const StyledReplyList = styled.div`
    width:100%;
    min-height: 500px;
    border-top: 1px solid #E6ECF0;
    h1{
        font-size: 1.6rem;
        text-align: center;
        padding-top: 20px;
    }
`

const ReplyList = ({repliedList}) => {

    //若無回覆顯示"尚未有任何回覆"字串
    if(typeof repliedList === 'string'){
        return(
            <StyledReplyList>
                <h1>尚未有任何回覆</h1>
            </StyledReplyList>
        )
    }else{
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
}

export default ReplyList