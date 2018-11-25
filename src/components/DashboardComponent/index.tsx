import {
    AppBar,
    Button,
    Divider,
    Drawer,
    IconButton,
    List,
    Toolbar,
    Typography,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MenuIcon from '@material-ui/icons/Menu';
import classNames from 'classnames';
import * as React from 'react';
import { RouterProps } from 'react-router';
import { mainListItems } from './listItems';

interface DashboardComponentState {
    open: boolean;
}

interface DashboardComponentProps {
    classes?: string;
    children: React.ReactNode;
}

type Props = DashboardComponentProps & RouterProps;

export class DashboardComponent extends React.Component<Props, DashboardComponentState> {
    constructor(props: Props) {
        super(props);

        this.state = {
            open: false,
        };
    }

    public componentDidMount() {
        const loggedIn = localStorage.getItem('loggedIn');
        if (!(loggedIn && loggedIn === 'true')) {
            this.props.history.push('/login');
        }
    }

    public render() {
        const { open } = this.state;
        const {
            children,
            classes,
        } = this.props;
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
                        <Button color="inherit" onClick={this.handleLogOut}>
                            Logout
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
                    {children}
                </main>
            </div>
        );
    }

    private handleDrawer = () => {
        this.setState(prev => ({
            open: !prev.open,
        }));
    }

    private handleLogOut = () => {
        localStorage.clear();
        this.props.history.replace('/login');
    }
}

export default DashboardComponent;
