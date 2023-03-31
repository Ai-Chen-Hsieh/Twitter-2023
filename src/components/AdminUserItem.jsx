import Avatar from "./Avatar"
import styled from "styled-components"
import { NumberFormatter } from "components"
import { LikeIcon, TweetIcon } from "assets/images"

const StyledUserItem = styled.div`
    width: 100%;
    height: 100%;
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
    overflow: hidden;
`

const StyledUserCover = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100%;
    z-index: 1;
`

const StyledUserItemBody = styled.div`
    position: relative;
    padding: 24px;
    text-align:center;
    word-break: break-all;
`

const StyledUserAvatarWrap = styled.div`
    position: absolute;
    top: -76px;
    left: calc(50% - 50px);
    width: 100px;
    height: 100px;
    padding: 4px;
    border-radius: 50%;
    background-color: var(--dark-0);
    overflow: hidden;
    z-index: 2;

    > img {
        display: block;
    }
`

const StyledUserInfoList = styled.ul`
    > li {
        display: inline-block;
        vertical-align: middle;

        > svg,
        > span {
            display: inline-block;
            vertical-align: middle;
        }
    }
`


/**
 * 使用者列表項目
 * @param {object} item - 使用者資訊 
 * @returns 
 */
const AdminUserItem = ({ user }) => {
    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
            <StyledUserItem>
                <StyledUserItemHeader>
                    <StyledUserCover src={user.cover} title={`${user.name}封面照`} aria-label={`${user.name}封面照`}/>
                </StyledUserItemHeader>

                <StyledUserItemBody>
                    <StyledUserAvatarWrap>
                        <Avatar imageUrl={user.avatar} />
                    </StyledUserAvatarWrap>

                    <h6 className="mt-2">{user.name}</h6>
                    <p className="text-fz-secondary color-secondary">@{user.account}</p>

                    <StyledUserInfoList className="mt-4">
                        <li>
                            <TweetIcon/> <span><NumberFormatter number={user.tweetCount} /></span>
                        </li>
                        <li className="ms-4">
                            <LikeIcon/> <span><NumberFormatter number={user.likedCount} /></span>
                        </li>
                    </StyledUserInfoList>

                    <StyledUserInfoList className="mt-3">
                        <li className="text-fz-secondary">
                            <span><NumberFormatter number={user.followingCount} />個</span><span className="color-secondary">跟隨中</span>
                        </li>
                        <li className="text-fz-secondary ms-2">
                            <span><NumberFormatter number={user.followerCount} />個</span><span className="color-secondary">跟隨者</span>
                        </li>
                    </StyledUserInfoList>

                </StyledUserItemBody>
            </StyledUserItem>
        </div>
    )
}

export default AdminUserItem