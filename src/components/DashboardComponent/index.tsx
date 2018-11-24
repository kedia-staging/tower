import {
    AppBar,
    Badge,
    Button,
    createStyles,
    CssBaseline,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Toolbar,
    Typography,
    withStyles,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import NotificationsIcon from '@material-ui/icons/Notifications';
import classNames from 'classnames';
import * as React from 'react';
import { mainListItems } from './listItems';
import { SimpleTable } from '../SimpleTable';
import { SimpleLineChart } from '../SimpleLineChart';

interface DashboardComponentState {
    open: boolean;
}

interface DashboardComponentProps {
    classes?: string;
}

export class DashboardComponent extends React.Component<DashboardComponentProps, DashboardComponentState> {
    constructor(props: DashboardComponentProps) {
        super(props);

        this.state = {
            open: false,
        };
    }

    public render() {
        const { open } = this.state;
        const { classes } = this.props;
        const cx = classNames('dashboard', classes);

        return (
            <div className={cx}>
                <AppBar
                  className={classNames('dashboard-app-bar', {
                      'dashboard-app-bar-shift': open,
                  })}
                >
                    <Toolbar
                        className={classNames('dashboard-toolbar', {
                            'dashboard-margin-left': open,
                        })}
                    >
                        <IconButton
                            color="inherit"
                            onClick={this.handleDrawer}
                            className={classNames('dashboard-menu-button', {
                              'dashboard-menu-button-hidden': open,
                            })}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap={true}
                            className="dashboard-title"
                        >
                            Dashboard
                        </Typography>
                        <Button color="inherit">
                            Log out
                        </Button>
                    </Toolbar>
                </AppBar>
                <Drawer
                    variant="permanent"
                    className={
                        classNames('dashboard-drawer-paper', {
                            'dashboard-drawer-paper-close': !open,
                        })
                    }
                    open={!open}
                >
                    <div className="dashboard-toolbar-icon">
                        {open ? (
                            <IconButton onClick={this.handleDrawer}>
                                <ChevronLeftIcon />
                            </IconButton> ) : (
                            <IconButton onClick={this.handleDrawer}>
                                <ChevronRightIcon />
                            </IconButton> )
                        }
                    </div>
                    <Divider />
                    <List>{mainListItems}</List>
                </Drawer>
                <main className="dashboard-content">
                    <div className="dashboard-app-bar-spacer"/>
                    <Typography variant="h4" gutterBottom component="h2">
                        Orders
                    </Typography>
                    <Typography component="div" className="dashboard-chart-container">
                        <SimpleLineChart />
                    </Typography>
                    <Typography variant="h4" gutterBottom component="h2">
                        Products
                    </Typography>
                    <div className="dashboard-table-container">
                        <SimpleTable />
                    </div>
                </main>
            </div>
        );
    }

    private handleDrawer = () => {
        this.setState(prev => ({
            open: !prev.open,
        }));
    }
}

export default DashboardComponent;
