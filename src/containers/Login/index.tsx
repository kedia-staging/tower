import {
    createStyles,
    CssBaseline,
    Paper,
    Theme,
    WithStyles,
    withStyles,
} from '@material-ui/core';
import React from 'react';
import {
    connect,
    MapDispatchToPropsFunction,
    MapStateToProps,
} from 'react-redux';
import { LoginBox } from '../../components';
import {
    AppState,
    getCurrentUser,
    selectCurrentUser,
    login,
    UserInterface,
} from '../../modules';

const styles = (theme: Theme) => createStyles({
    main: {
        width: 'auto',
        display: 'block',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
});

interface StyleProps extends WithStyles<typeof styles> {
    theme: Theme;
}

interface LoginState {
    email: string;
    password: string;
}

interface ReduxProps {
    currentUser: UserInterface | undefined;
}

interface DispatchProps {
    login: typeof login;
    getCurrentUser: typeof getCurrentUser;
}

type Props = StyleProps & DispatchProps & ReduxProps;

class LoginScreen extends React.Component<Props, LoginState> {
    constructor(props: Props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        };
    }

    public componentDidMount() {
        this.props.getCurrentUser();
    }

    public componentWillReceiveProps(next: Props) {
        if (next.currentUser) {
            window.location.replace('/tower');
        }
    }

    public render() {
        const { classes } = this.props;
        const { email, password } = this.state;

        return (
            <main className={classes.main}>
                <CssBaseline />
                <Paper className={classes.paper}>
                    <LoginBox
                        email={email}
                        password={password}
                        handleChangeEmail={this.handleChangeEmailValue}
                        handleChangePassword={this.handleChangePasswordValue}
                        handleSignIn={this.signIn}
                    />
                </Paper>
            </main>
        );
    }

    private handleChangeEmailValue = (e: any) => {
        this.setState({
          email: e.target.value,
        });
    };

    private handleChangePasswordValue = (e: any) => {
        this.setState({
          password: e.target.value,
        });
    };

    private signIn = () => {
        const { email, password } = this.state;
        this.props.login({email, password});
    };
}

const mapStateToProps: MapStateToProps<ReduxProps, {}, AppState> =
    (state: AppState): ReduxProps => ({
        currentUser: selectCurrentUser(state),
    });

const mapDispatchToProps: MapDispatchToPropsFunction<DispatchProps, {}> =
    dispatch => ({
        getCurrentUser: () => dispatch(getCurrentUser()),
        login: payload => dispatch(login(payload)),
    });

export const Login = connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, { withTheme: true })(LoginScreen));
