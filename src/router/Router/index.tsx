import React, { Component } from 'react';
import {
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import {
    Dashboard,
    Login,
    UserInfo,
} from '../../containers';
import Cookies from 'js-cookie';

const PrivateRoute: React.SFC<any> = ({ component: CustomComponent, isLogged, ...rest }) => {
    return <Route {...rest} render={props => (
        isLogged ? <CustomComponent {...props} /> :
            <Redirect to="/login" />
    )} />;
};

class Router extends React.Component {
    public render() {
        const isCurrentSession = Cookies.get('session') ? true : false;
        return (
            <Switch>
                <PrivateRoute isLogged={isCurrentSession} exact={true} path="/" component={Dashboard}/>
                <Route exact={true} path="/login" component={Login}/>
                <PrivateRoute isLogged={isCurrentSession} path="/users/:uid" component={UserInfo} />
                <Route path="**"
                           render={() => <Redirect to="/" />} />
            </Switch>
        );
    }
}

export const AppRouter = Router;
