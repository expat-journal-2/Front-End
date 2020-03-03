import React from 'react';
import styled from 'styled-components'

const NavSection = styled.header`
  text-align: center;
  padding: 10px 0;
  Background: lightblue;
`;

const Navbutton = styled.button`
  color: red; 
  padding: 3px;
  margin: 4px;
`;

const NavBar = () => {
    return (
        <NavSection>
            <Navbutton onclick="">About</Navbutton>
            <Navbutton onclick="">Marketing</Navbutton>
            <Navbutton onclick="">FAQ</Navbutton>
            <Navbutton onclick="">Login</Navbutton>
            <Navbutton onclick="">Signup</Navbutton>
        </NavSection>
    )
}

export default NavBar;