import React from 'react';
import styled from 'styled-components'

const FooterSection = styled.footer`
  text-align: center;
  padding: 10px 0;
`;
const FooterDesc = styled.p`
  color: #000;
`;

const Footer = () => {
    return (
        <FooterSection>
            <FooterDesc>copyright &copy; 2020 by Expat Journal Team 2gi</FooterDesc>
        </FooterSection>
    )
}

export default Footer;