import styled from "styled-components"
import { dummyAdminTweetList } from "testData/dummyAdminTweetList"
import { AdminTweetList, Header } from "components"

const StyledContainer = styled.div`
    width: 100%;
    border-right: 1px solid var(--gray-20);
    min-height: 100vh;
    /* max-width: calc(100% - 130px); */
`

/**
 * [後台] 推文清單頁
 * @returns 
 */
const AdminMainPage = () => {
    return (
        <StyledContainer>
            <Header text="推文清單" />
            <AdminTweetList tweetList={dummyAdminTweetList} />
        </StyledContainer>
    )
}

export default AdminMainPage