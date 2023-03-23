import styled from "styled-components"
// import defaultAvatar from "assets/images/ac_default_avatar.png"   ac預設avatar

const StyleAvatar = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
`

const Avatar = ({ imageUrl }) => {
    return(
        <StyleAvatar src={imageUrl} alt="avatar">
        </StyleAvatar>
    )
}

export default Avatar