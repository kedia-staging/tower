import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import React, { Component } from 'react';

import Layout from './components/Layout';
import Dashboard from './containers/Dashboard';
import LoginContainer from './containers/Login';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename="/tower">
        <Switch>
          <Route exact path="/" render={() => <Layout><Dashboard /></Layout>}/>
          <Route path="/login" render={() => <LoginContainer />}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
