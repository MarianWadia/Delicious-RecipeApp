import React from 'react'
import styled from 'styled-components'
import { GiKnifeFork } from 'react-icons/gi'
import { Link } from 'react-router-dom'

function Logo() {
  return (
    <Nav>
        <GiKnifeFork />
        <StyledLogo to={"/"}>Deliciousss</StyledLogo>
    </Nav>
  )
}


const StyledLogo = styled(Link)`
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 400;
    font-family: 'Lobster Two', cursive;
`;

 const Nav = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 4rem 0rem;
    svg{
        font-size: 2rem;
    }
 `


export default Logo