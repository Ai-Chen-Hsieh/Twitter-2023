import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledLink = styled(Link)`
  color: var(--primary);
  text-align: center;
  transition: color .5s;
  &:hover {
    color: var(--secondary-blue);
  }

  /* display: 'inline-block' */
  display: inline-block;

  /* display: 'block */
  &.block {
    display: block;
  }
`

const LinkButton = ({path, display='inline-block', text}) => {
  return (
    <StyledLink to={path} className={display}>
      {text}
    </StyledLink>
  )
}

export default LinkButton