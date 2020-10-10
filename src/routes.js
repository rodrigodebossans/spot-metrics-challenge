import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import ShoopingList from './pages/ShoppingList';

export function Routes() {
  return (
    <Router>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/shopping-list" component={ShoopingList} />
      </Switch>
    </Router>
  );
}
