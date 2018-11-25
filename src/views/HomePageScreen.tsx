import * as React from 'react';
import { RouterProps } from 'react-router';
import {
    Navbar,
    HomePage,
} from '../components';

class HomePageScreen extends React.Component<RouterProps> {
    public render() {
        const { history } = this.props;
        return (
            <Navbar history={history}>
                <HomePage />
            </Navbar>
        );
    }
}

export {
    HomePageScreen,
};
