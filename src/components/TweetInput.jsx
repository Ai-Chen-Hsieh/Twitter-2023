import { useRef } from "react";
import styled from "styled-components";

const StyledTweetInput = styled.div`

    width:100%;
    height: 100%;
    padding: 10px;
    display: flex;

    .avatar{
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }

    .tweetInput{
        color: var(--secondary);
        margin-top: 10px;
        margin-left: 10px;
        margin-right: 10px;
        flex: 1;

        .tweetInputValue{
            border:none;
            font-size: 1.4rem;
            width: 100%;
            resize:none;

            &:focus {
                outline: none;
            }
        }
    }
`



const TweetInput = ({children, onChange, placeholder ="有什麼新鮮事"}) => {
    const inputRef = useRef(null)
    
    return (
        <StyledTweetInput>
            <div className="avatar">
                {children}
            </div>
            <div className="tweetInput">
                <textarea 
                    className="tweetInputValue" 
                    maxLength={140}
                    ref={inputRef}
                    onChange={()=>{
                        onChange?.(inputRef.current.value) 
                    }} 
                    cols="30" 
                    rows="8" 
                    placeholder={placeholder}
                ></textarea>
            </div>
        </StyledTweetInput>
    )
}

export default TweetInput