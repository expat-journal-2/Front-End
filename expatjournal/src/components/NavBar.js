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
  padding: 10px 0;

  .nav-btn{
    color: #EAE7DC; 
    padding: 3px;
    margin: 4px;
    background: #E98074;
    cursor: pointer;
  }
`;
const HeaderDesc = styled.p`
  color: black;
`;

const NavBarImg = styled.div`
    padding: 3px;
    margin: 4px;
    cursor: pointer;
`;

const NavBar = () => {
    return (
    <NavSection>
      <NavBarImg>
           <img src="../images/log.jpg" alt="journal"/>
      </NavBarImg>
        
          <HeaderDesc>Expat Journal Team 2</HeaderDesc>
          <Link to='/'> 
              <button className='nav-btn'>About</button>
            </Link>
            <Link to='https://reverent-villani-9adcf1.netlify.com/' target="_blank"> 
              <button className='nav-btn'>Marketing</button>
            </Link>
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