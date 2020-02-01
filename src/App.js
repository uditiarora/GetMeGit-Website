import React from 'react';
import history from './history';
import Index from './components/Index';
import User from './components/User';
import { Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router history={history}>
    <Switch>
      <Route exact path='/' component={Index} />
      <Route path='/user' component={User} />
    </Switch>
  </Router>
  );
}

export default App;
