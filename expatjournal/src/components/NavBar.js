import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.jpg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

const NavSection = styled.header`
  text-align: center;
  padding: 4px 0;

  .nav-btn{
    color: #EAE7DC; 
    padding: 3px;
    margin: 4px;
    background: #E85A4F;
    cursor: pointer;
    border-radius: 9px;
  }
`;
const HeaderDesc = styled.p`
  color: #E85A4F;
  font-size: 1.2em;
`;

const NavBarImg = styled.div`
    
    cursor: pointer;
`;

const NavBar = () => {
    return (
    <NavSection>
      <NavBarImg>
           <img src={logo} alt="journal"/>
      </NavBarImg>
        
          <HeaderDesc>Expat Journal Team 2</HeaderDesc>
          <Link to='/'> 
              <button className='nav-btn'>About</button>
            </Link>
            <a href='https://reverent-villani-9adcf1.netlify.com/' target="_blank"> 
              <button className='nav-btn'>Marketing</button>
            </a>
            <Link to='/'> 
              <button className='nav-btn'>FAQ</button>
            </Link>
            <Link to='/sign-in'> 
              <button className='nav-btn'>Login</button>
            </Link>
            <Link to='/sign-up'> 
              <button className='nav-btn'>Signup</button>
            </Link>
        </NavSection>
    )
}

export default NavBar;