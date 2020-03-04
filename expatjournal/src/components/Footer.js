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
import logo from '../images/logo.jpg';

const FooterSection = styled.footer`
  text-align: center;
  padding: 10px 0;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;

  .ClickButton{
    color: #EAE7DC; 
  padding: 3px;
  margin: 4px;
  background: #E85A4F;
  cursor: pointer;
  }
`;

const FooterDesc = styled.p`
  color: #EAE7DC;
`;


const Footer = () => {
    return (
        <FooterSection>
            <FooterDesc>copyright &copy; 2020 by Expat Journal Team 2</FooterDesc>
            <Link to='/'> 
              <button className='ClickButton'>About</button>
            </Link>
            <a href='https://reverent-villani-9adcf1.netlify.com/' target="_blank"> 
              <button className='ClickButton'>Marketing</button>
            </a>
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