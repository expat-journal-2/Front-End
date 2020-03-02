import React from 'react';

import './App.css';

import Login from './components/Login';
import SignUp from './components/SignUp';
import { Route, Switch } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute.js';

import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';


function App() {
  return (
    <div className="App">
     <h1>Welcome to Expat Journal Team 2</h1>
     <h2>We will be live Friday 6 March 2020</h2>
     {/* <Switch>
       <Route exact path='/sign-in' component={Login} />
       <Route exact path='/sign-up' component={SignUp}/>
       <PrivateRoute path='/' component={NavBar} />
     </Switch>*/
    <Route path='/' component={Footer} />  }
    </div>
  );
}

export default App;
