import React from 'react'
import { StyledSocials } from './style'
import {BsGithub,BsLinkedin} from "react-icons/bs";


const Social = ({children}) => {
  return (
    <StyledSocials>
        <a href="https://github.com/07kagan07"><BsGithub/></a>
        <a href="https://www.linkedin.com/in/kagancoskun07/"><BsLinkedin/></a>
    </StyledSocials>
  )
}

export default Social