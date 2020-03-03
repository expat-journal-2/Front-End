
  

import React from 'react';
import styled from 'styled-components'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

const FooterSection = styled.footer`
  text-align: center;
  padding: 10px 0;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`;
const FooterDesc = styled.p`
  color: #EAE7DC;
`;
const ClickButton = styled.button`
  color: #EAE7DC; 
  padding: 3px;
  margin: 4px;
  background: #E98074;
  cursor: pointer;
`;

const Footer = () => {
    return (
        <FooterSection>
            <FooterDesc>copyright &copy; 2020 by Expat Journal Team 2</FooterDesc>
            <Link to='/'> 
              <button className='ClickButton'>About</button>
            </Link>
            <Link to='/'> 
              <button className='ClickButton'>Marketing</button>
            </Link>
            <Link to='/'> 
              <button className='ClickButton'>FAQ</button>
            </Link>
            <Link to='/sign-in'> 
              <button className='ClickButton'>Login</button>
            </Link>
            <Link to='/sign-up'> 
              <button className='ClickButton'>Signup</button>
            </Link>
        </FooterSection>
    )
}

export default Footer;