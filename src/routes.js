import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import ShopingList from './pages/shopping-list';

export function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/shopping-list' component={ShopingList} />
      </Switch>
    </Router>
  );
}
