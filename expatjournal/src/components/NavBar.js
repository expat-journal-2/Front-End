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

const NavSection = styled.header`
  text-align: center;
  padding: 10px 0;

  .nav-btn{
    color: red; 
  padding: 3px;
  margin: 4px;
  }
`;
const HeaderDesc = styled.p`
  color: black;
`;


const NavBar = () => {
    return (
        <NavSection>
          <HeaderDesc>Expat Journal Team 2</HeaderDesc>
          <Link to='/'> 
              <button className='nav-btn'>About</button>
            </Link>
            <Link to='/'> 
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