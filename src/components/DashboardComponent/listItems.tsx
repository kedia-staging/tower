import AssignmentIcon from '@material-ui/icons/Assignment';
import BarChartIcon from '@material-ui/icons/BarChart';
import DashboardIcon from '@material-ui/icons/Dashboard';
import LayersIcon from '@material-ui/icons/Layers';
import PeopleIcon from '@material-ui/icons/People';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {
    ListItem,
    ListItemIcon,
    ListItemText,
    ListSubheader,
} from '@material-ui/core';
import * as React from 'react';

export const mainListItems = (
    <div>
        <ListItem className="list-item" button>
            <ListItemIcon>
                <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem className="list-item" button>
            <ListItemIcon>
                <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Orders" />
        </ListItem>
        <ListItem className="list-item" button>
            <ListItemIcon>
                <PeopleIcon />
            </ListItemIcon>
            <ListItemText primary="Customers" />
        </ListItem>
        <ListItem className="list-item"  button>
            <ListItemIcon>
                <BarChartIcon />
            </ListItemIcon>
            <ListItemText primary="Reports" />
        </ListItem>
        <ListItem className="list-item" button>
            <ListItemIcon>
                <LayersIcon />
            </ListItemIcon>
            <ListItemText primary="Integrations" />
        </ListItem>
    </div>
);
