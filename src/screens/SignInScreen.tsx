import { History } from 'history';
import * as React from 'react';
import { RouterProps } from 'react-router';
import { SignIn } from '../components/SignIn';

interface OwnProps {
    history: History;
}

type Props = OwnProps & RouterProps;

class SignInScreen extends React.Component<Props> {
    public render() {
        const { history } = this.props;
        return (
            <SignIn history={history} />
        );
    }
}

export {
    SignInScreen,
};
