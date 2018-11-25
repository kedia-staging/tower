import { History } from 'history';
import * as React from 'react';
import { Redirect, Route, RouterProps, Switch } from 'react-router';
import {
    HomePageScreen,
    LoginScreen,
} from '../../views';

interface OwnProps {
    history: History;
}

type Props = OwnProps & RouterProps;


class LayoutComponent extends React.Component<Props> {
    public render() {

        return (
            <div className="tr-layout">
                <Switch>
                    <Route path="/admin" component={HomePageScreen} />
                    <Route path="/login" component={LoginScreen} />
                    <Route path="**"
                           render={() => <Redirect to="/admin" />} />
                </Switch>
            </div>
        );
    }


}

export const Layout = LayoutComponent;
