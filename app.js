// App.js
import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import FullStack from './FullStack';
import DataScience from './DataScience';
import CyberSecurity from './CyberSecurity';
import Career from './Career';
import './App.css';

const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">All</NavLink>
        <NavLink to="/full-stack">Full Stack Development</NavLink>
        <NavLink to="/data-science">Data Science</NavLink>
        <NavLink to="/cyber-security">Cyber Security</NavLink>
        <NavLink to="/career">Career</NavLink>
      </nav>
      <Switch>
        <Route path="/full-stack" component={FullStack} />
        <Route path="/data-science" component={DataScience} />
        <Route path="/cyber-security" component={CyberSecurity} />
        <Route path="/career" component={Career} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default App;
