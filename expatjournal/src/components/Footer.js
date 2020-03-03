  
import React from 'react';
import styled from 'styled-components'

const FooterSection = styled.footer`
  text-align: center;
  padding: 10px 0;
`;
const FooterDesc = styled.p`
  color: #000;
`;
const Clickbutton = styled.button`
  color: red; 
  padding: 3px;
  margin: 4px;
`;

const Footer = () => {
    return (
        <FooterSection>
            <FooterDesc>copyright &copy; 2020 by Expat Journal Team 2gi</FooterDesc>
            <Clickbutton onclick="">About</Clickbutton>
            <Clickbutton onclick="">Marketing</Clickbutton>
            <Clickbutton onclick="">FAQ</Clickbutton>
            <Clickbutton onclick="">Login</Clickbutton>
            <Clickbutton onclick="">Signup</Clickbutton>
        </FooterSection>
    )
}

export default Footer;