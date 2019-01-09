import {
    Avatar,
    Button,
    createStyles,
    FormControl,
    Input,
    InputLabel,
    Theme,
    Typography,
    WithStyles,
    withStyles,
} from '@material-ui/core';
import LockIcon from '@material-ui/icons/LockOutlined';
import PropTypes from 'prop-types';
import React from 'react';

const styles = (theme: Theme) => createStyles({
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%',
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
});

interface StyleProps extends WithStyles<typeof styles> {
    theme: Theme;
}

interface OwnProps {
    email: string;
    password: string;
    handleChangeEmail: (email: string) => void;
    handleChangePassword: (password: string) => void;
    handleSignIn: () => void;
}

type Props = StyleProps & OwnProps;

class LoginComponent extends React.Component<Props> {
    public render() {
        const {
            classes,
            email,
            password,
        } = this.props;

        return (
            <React.Fragment>
                <Avatar className={classes.avatar}>
                    <LockIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form}>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email">Email Address</InputLabel>
                        <Input
                            id="email"
                            name="email"
                            value={email}
                            onChange={this.handleEmail}
                            autoComplete="email"
                            autoFocus
                        />
                    </FormControl>
                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password">Password</InputLabel>
                        <Input
                            name="password"
                            type="password"
                            value={password}
                            onChange={this.handlePassword}
                            id="password"
                            autoComplete="current-password"
                        />
                    </FormControl>
                    <Button
                        type="button"
                        onClick={this.signIn}
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign in
                    </Button>
                </form>
            </React.Fragment>
        );
    }

    private handleEmail = (e: any) => {
        this.props.handleChangeEmail(e);
    };

    private handlePassword = (e: any) => {
        this.props.handleChangePassword(e);
    };

    private signIn = () => {
        this.props.handleSignIn();
    };
}

export const LoginBox = withStyles(styles, { withTheme: true })(LoginComponent);
