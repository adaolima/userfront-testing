import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from 'react-router-dom';
import Userfront from '@userfront/react';

// import './App.css';

import Login from './pages/Login'
import Home from './pages/Home'
import PasswordReset from './pages/PasswordReset';
import Dashboard from './pages/Dashboard';

Userfront.init("pn445q8n");

const getInfo = async () => {
  const res = await fetch('/dashboard', { 
    method: 'GET',
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${Userfront.accessToken()}`
    }
  })
  console.log(res)
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li className="nav-item">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/login">Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/reset">Reset</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <button onClick={getInfo}>Get Info test</button>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/reset">
            <PasswordReset />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
