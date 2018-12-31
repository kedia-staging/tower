
import {
    AppBar,
    Button,
    createStyles,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Theme,
    Toolbar,
    Typography,
    withStyles,
    WithStyles,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AccountIcon from '@material-ui/icons/AccountBox';
import DashboardIcon from '@material-ui/icons/DashboardRounded';
import CurrencyIcon from '@material-ui/icons/AttachMoneySharp';
import ChartIcon from '@material-ui/icons/MultilineChartSharp';
import CheckedIcon from '@material-ui/icons/Check';
import UpIcon from '@material-ui/icons/ArrowUpwardSharp';
import DownIcon from '@material-ui/icons/ArrowDownwardSharp';
import classNames from 'classnames';
import * as React from 'react';

const drawerWidth = 240;

const styles = (theme: Theme) => createStyles({
    appBar: {
        backgroundColor: '#3598D5',
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        backgroundColor: '#3598D5',
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing.unit * 7 + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9 + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    grow: {
        flexGrow: 1,
        cursor: 'pointer',
    },
});

interface Props extends WithStyles<typeof styles> {
    theme: Theme;
    logout: () => void;
}

interface NavbarState {
    open: boolean;
}

const menuItems = ['Account', 'Dashboard', 'Currencies', 'Market', 'Proofs', 'Deposits', 'Withdraws'];

class NavBar extends React.Component<Props, NavbarState> {
    constructor(props: Props) {
        super(props);

        this.state = {
            open: false,
        };
    }

    render() {
        const { classes, theme } = this.props;
        const { open } = this.state;

        return (
            <div>
                <AppBar
                  position="fixed"
                  className={classNames(classes.appBar, {
                    [classes.appBarShift]: open,
                  })}
                >
                    <Toolbar disableGutters={!open}>
                        <IconButton
                          color="inherit"
                          aria-label="Open drawer"
                          onClick={this.handleDrawerOpen}
                          className={classNames(classes.menuButton, {
                            [classes.hide]: open,
                          })}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" className={classes.grow} onClick={this.goToDashboard}>
                            Control Tower
                        </Typography>
                        <Button color="inherit" onClick={this.handleLogout}>
                            Logout
                        </Button>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    className={classNames(classes.drawer, {
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    })}
                    classes={{
                        paper: classNames({
                            [classes.drawerOpen]: open,
                            [classes.drawerClose]: !open,
                        }),
                    }}
                    open={open}
                >
                    <div className={classes.toolbar}>
                        <IconButton onClick={this.handleDrawerClose}>
                            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                        </IconButton>
                    </div>
                    <Divider />
                    <List>
                        {menuItems.map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>
                                    {
                                        index === 0 ? <AccountIcon />
                                        : index === 1 ? <DashboardIcon />
                                        : index === 2 ? <CurrencyIcon/>
                                        : index === 3 ? <ChartIcon/>
                                        : index === 4 ? <CheckedIcon/>
                                        : index === 5 ? <UpIcon/>
                                        : <DownIcon/>
                                    }
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </div>
        );
    }

    private handleDrawerOpen = () => {
        this.setState({ open: true });
    };

    private handleDrawerClose = () => {
        this.setState({ open: false });
    };

    private handleLogout = () => {
        this.props.logout();
    };

    private goToDashboard = () => {
        window.location.replace('/tower');
    };
}

export const Navbar = withStyles(styles, { withTheme: true })(NavBar);
