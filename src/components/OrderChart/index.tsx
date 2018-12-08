import {
    Typography,
} from '@material-ui/core';
import * as React from 'react';
import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

interface ChartDataInterface {
    name: string;
    Visits: number;
    Orders: number;
}

class LineDashboardChart extends React.Component {
    public render() {
        return (
            <div>
                <Typography variant="h4" gutterBottom component="h2">
                    Orders
                </Typography>
                <Typography component="div" className="dashboard-chart-container">
                    <ResponsiveContainer width="99%" height={320}>
                        <LineChart data={this.tableData}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <CartesianGrid vertical={false} strokeDasharray="3 3" />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="Visits" stroke="#82ca9d" />
                            <Line type="monotone" dataKey="Orders" stroke="#8884d8" activeDot={{ r: 8 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </Typography>
            </div>
        );
    }

    private tableData: ChartDataInterface[] = [
        { name: 'Mon', Visits: 2200, Orders: 3400 },
        { name: 'Tue', Visits: 1280, Orders: 2398 },
        { name: 'Wed', Visits: 5000, Orders: 4300 },
        { name: 'Thu', Visits: 4780, Orders: 2908 },
        { name: 'Fri', Visits: 5890, Orders: 4800 },
        { name: 'Sat', Visits: 4390, Orders: 3800 },
        { name: 'Sun', Visits: 4490, Orders: 4300 },
    ];
}

export const OrderChart = LineDashboardChart;
