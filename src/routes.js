import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';

export function Routes() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/shopping-list" component={() => <h1>Checkout router</h1>} />
      </Switch>
    </Router>
  );
}
