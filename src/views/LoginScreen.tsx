import { History } from 'history';
import * as React from 'react';
import { RouterProps } from 'react-router';
import { Login } from '../components/Login';

interface OwnProps {
    history: History;
}

type Props = OwnProps & RouterProps;

class LoginScreen extends React.Component<Props> {
    public render() {
        const { history } = this.props;
        return (
            <Login history={history} />
        );
    }
}

export {
    LoginScreen,
};
