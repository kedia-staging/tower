import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import {
    UsersScreen,
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
                    <Route path="/users" component={UsersScreen} />
                    <Route path="**"
                           render={() => <Redirect to="/users" />} />
                </Switch>
            </div>
        );
    }


}

export const Layout = LayoutComponent;
