import * as React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { WithStyles, createStyles } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

import NavBar from '../NavBar';

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
}

class Layout extends React.Component<Props, object> {

    public render() {
        const {
            classes,
            theme,
            children
        } = this.props;

        return (
            <div className={classes.root}>
                <CssBaseline />
                <NavBar />

                <main className={classes.content}>
                    <div className={classes.toolbar} />
                    {children}
                </main>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Layout);