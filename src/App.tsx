import React from 'react';
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  NavLink
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="page">
        <nav>
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Login</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Reset</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/">Dashboard</NavLink>
          </li>
        </nav>
      </div>
    </Router>
  );
}

export default App;
