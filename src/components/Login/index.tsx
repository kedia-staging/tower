import LockIcon from '@material-ui/icons/LockOutlined';
import {
    Avatar,
    Button,
    FormControl,
    Input,
    InputLabel,
    Paper,
    Typography,
} from '@material-ui/core';
import classnames from 'classnames';
import * as React from 'react';
import { RouterProps } from 'react-router';
import { defaultUser } from '../../helpers';

interface LoginProps {
    classes?: any;
}

interface LoginState {
    email: string;
    password: string;
}

type Props = LoginProps & RouterProps;

export class Login extends React.Component<Props, LoginState> {
    constructor(props: Props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };
    }

    public componentDidMount() {
        const loggedIn = localStorage.getItem('loggedIn');
        if (loggedIn && loggedIn === 'true') {
            this.props.history.push('/admin');
        }
    }

    public render() {
        const { classes } = this.props;
        const { email, password } = this.state;
        const cx = classnames('signin signin-main', classes);

        return (
            <main className={cx}>
                <Paper className="signin-main-paper">
                    <Avatar className="signin-main-paper-avatar">
                        <LockIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className="signin-main-paper-form">
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="email">Email Address</InputLabel>
                            <Input
                                id="email"
                                value={email}
                                onChange={this.handleChangeEmail}
                            />
                        </FormControl>
                        <FormControl margin="normal" required fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input
                                value={password}
                                type="password"
                                id="password"
                                onChange={this.handleChangePassword}
                            />
                        </FormControl>
                        <Button
                            type="button"
                            fullWidth={true}
                            variant="contained"
                            color="primary"
                            className="signin-main-paper-form-submit"
                            onClick={this.handleSignIn}
                        >
                            Sign in
                        </Button>
                    </form>
                </Paper>
            </main>
        );
    }

    private handleSignIn = () => {
        const { email, password } = this.state;

        if (email && password) {
            const user = {
                email: email,
                password: password,
            };

            if (user.email === defaultUser.email && user.password === defaultUser.password) {
                localStorage.setItem('email', JSON.stringify(user.email));
                localStorage.setItem('loggedIn', 'true');
                this.props.history.push('/admin');
            } else {
                localStorage.setItem('loggedIn', 'false');
            }
        } else {
          localStorage.setItem('loggedIn', 'false');
        }
    };

    private handleChangeEmail = (e: any) => {
        this.setState({
            email: e.target.value,
        });
    };

    private handleChangePassword = (e: any) => {
        this.setState({
            password: e.target.value,
        });
    };
}

export default Login;
