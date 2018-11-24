import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import {
    DashboardScreen,
    SignInScreen,
} from '../../screens';

interface OwnProps {
    history: any;
}

type Props = OwnProps;

class LayoutComponent extends React.Component<Props> {
    public render() {
        return (
            <div className="tr-layout">
                <Switch>
                    <Route path="/admin" component={DashboardScreen} />
                    <Route path="/login" component={SignInScreen} />
                    <Route path="**"
                           render={() => <Redirect to="/admin" />} />
                </Switch>
            </div>
        );
    }


}

export const Layout = LayoutComponent;
