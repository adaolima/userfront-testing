import React from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  NavLink
} from 'react-router-dom';

import Login from './pages/Login'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <div className="page">
        <nav>
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/login">Login</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/reset">Reset</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
          </li>
        </nav>
        <Switch>
          <Route path="/login">
            <Login />
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
