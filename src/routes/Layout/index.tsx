import { History } from 'history';
import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import {
    UsersScreen,
    SignInScreen,
} from '../../screens';

interface OwnProps {
    history: History;
}

type Props = OwnProps;

class LayoutComponent extends React.Component<Props> {
    public render() {
        return (
            <div className="tr-layout">
                <Switch>
                    <Route path="/admin" component={UsersScreen} />
                    <Route path="/login" component={SignInScreen} />
                    <Route path="**"
                           render={() => <Redirect to="/admin" />} />
                </Switch>
            </div>
        );
    }


}

export const Layout = LayoutComponent;
