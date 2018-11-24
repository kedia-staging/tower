import { History } from 'history';
import * as React from 'react';
import { Router } from 'react-router';
import { Layout } from './routes';

export interface AppProps {
    history: History;
}

export class App extends React.Component<AppProps, {}, {}> {
    public render() {
        const { history } = this.props;
        return (
            <Router history={history}>
                <Layout  history={history} />
            </Router>
        );
    }
}
