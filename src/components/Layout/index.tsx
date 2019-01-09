import * as React from 'react';
import { WithStyles, createStyles, CssBaseline } from '@material-ui/core';
import { withStyles, Theme } from '@material-ui/core/styles';

import { Navbar } from '../';

const styles = (theme: Theme) => createStyles({
  root: {
    display: 'flex',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

interface Props extends WithStyles<typeof styles> {
    theme: Theme;
    children: React.ReactNode;
    logout: () => void;
}

class LayoutComponent extends React.Component<Props, object> {
    public render() {
        const {
            classes,
            theme,
            children
        } = this.props;

        return (
            <div className={classes.root}>
                <CssBaseline />
                <Navbar logout={this.handleLogout} />

                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    {children}
                </main>
            </div>
        );
    }

    private handleLogout = () => {
        this.props.logout();
    };
}

export const Layout = withStyles(styles, { withTheme: true })(LayoutComponent);
