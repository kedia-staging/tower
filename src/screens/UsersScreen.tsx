import { History } from 'history';
import {
    Typography,
} from '@material-ui/core';
import * as React from 'react';
import { RouterProps } from 'react-router';
import {
    DashboardComponent,
    SimpleTable,
    SimpleLineChart,
} from '../components';

interface OwnProps {
    history: History;
}

type Props = OwnProps & RouterProps;

class UsersScreen extends React.Component<Props> {
    public render() {
        const { history } = this.props;
        return (
            <DashboardComponent history={history}>
                <Typography variant="h4" gutterBottom component="h2">
                    Orders
                </Typography>
                <Typography component="div" className="dashboard-chart-container">
                    <SimpleLineChart />
                </Typography>
                <Typography variant="h4" gutterBottom component="h2">
                    Users
                </Typography>
                <div className="dashboard-table-container">
                    <SimpleTable />
                </div>
            </DashboardComponent>
        );
    }
}

export {
    UsersScreen,
};
