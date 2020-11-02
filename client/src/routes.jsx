import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import requireAuth from './components/RouteRequiresAuth';
import requireNoAuth from './components/RouteRequiresNoAuth';

import Wrapper from './application/components/AppWrapper';

// Pages
import Login from './pages/Login';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import PageNotFound from './pages/PageNotFound';

class Routes extends Component {
  render() {
    return (
      <Wrapper>
        <Switch>
          <Route exact path="/" component={requireNoAuth(Home)} />
          <Route exact path="/login" component={requireNoAuth(Login)} />
          <Route exact path="/dashboard" component={requireAuth(Dashboard)} />
          <Route component={PageNotFound} />
        </Switch>
      </Wrapper>
    );
  }
}

export default Routes;