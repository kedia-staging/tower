import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';
import React, { Component } from 'react';
import {
    Dashboard,
    Login,
} from './containers';

class App extends React.Component {
    public render() {
        return (
            <BrowserRouter basename="/tower">
                <Switch>
                    <Route exact={true} path="/" component={Dashboard}/>
                    <Route exact={true} path="/login" component={Login}/>
                </Switch>
            </BrowserRouter>
        );
    }
}

export default App;
