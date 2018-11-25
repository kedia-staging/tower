import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Typography,
} from '@material-ui/core';
import classnames from 'classnames';
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

interface HomePageProps {
    classNames?: string;
};

interface TableRowDataInterface {
    email: string;
    auth: string;
    level: number;
    role: string;
    uid: number;
    id: number;
    state: string;
    created: string;
}

interface HomePageState {
    data: TableRowDataInterface[];
}

interface ChartDataInterface {
    name: string;
    Visits: number;
    Orders: number;
}

class HomePage extends React.Component<HomePageProps, HomePageState> {
    id: number = 0;

    tableData: ChartDataInterface[] = [
        { name: 'Mon', Visits: 2200, Orders: 3400 },
        { name: 'Tue', Visits: 1280, Orders: 2398 },
        { name: 'Wed', Visits: 5000, Orders: 4300 },
        { name: 'Thu', Visits: 4780, Orders: 2908 },
        { name: 'Fri', Visits: 5890, Orders: 4800 },
        { name: 'Sat', Visits: 4390, Orders: 3800 },
        { name: 'Sun', Visits: 4490, Orders: 4300 },
    ];

    constructor(props: HomePageProps) {
        super(props);

        this.state = {
            data: [],
        };
    }

    public componentDidMount() {
        this.setState({
            data: this.getDataForTable(),
        });
    }

    public render() {
        const { data } = this.state;
        const { classNames } = this.props;

        const tableData = this.tableData;

        const cx = classnames('table table-root', classNames);

        return (
            <div>
                <Typography variant="h4" gutterBottom component="h2">
                    Orders
                </Typography>
                <Typography component="div" className="dashboard-chart-container">
                    <ResponsiveContainer width="99%" height={320}>
                        <LineChart data={tableData}>
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
                <Typography variant="h4" gutterBottom component="h2">
                    Users
                </Typography>
                <div className="dashboard-table-container">
                    <Paper className={cx}>
                        <Table className="table-body">
                            <TableHead>
                                <TableRow>
                                    <TableCell>UID</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell numeric>Level</TableCell>
                                    <TableCell>Role</TableCell>
                                    <TableCell>OTP</TableCell>
                                    <TableCell>State</TableCell>
                                    <TableCell>Created</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map(n => {
                                    return (
                                        <TableRow key={n.id}>
                                            <TableCell>{n.uid}</TableCell>
                                            <TableCell component="th" scope="row">
                                              {n.email}
                                            </TableCell>
                                            <TableCell numeric>{n.level}</TableCell>
                                            <TableCell>{n.role}</TableCell>
                                            <TableCell>{n.auth}</TableCell>
                                            <TableCell>{n.state}</TableCell>
                                            <TableCell>{n.created}</TableCell>
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </Paper>
                </div>
            </div>
        );
    }

    private createData = (email: string, auth: string, level: number, role: string, uid: number, state: string, created: string) => {
        this.id += 1;
        const tableDataObject: TableRowDataInterface = {
            id: this.id,
            email: email,
            auth: auth,
            level: level,
            role: role,
            uid: uid,
            state: state,
            created: created,
        };
        return tableDataObject;
    };

    private getDataForTable = () => {
        return [
            this.createData('admin@peatio.tech', 'Yes', 3, 'Admin', 93223831123, 'Active', '2018-09-01'),
            this.createData('akhlopiachyi@helisotech.fr', 'No', 1, 'Member', 93223831123, 'Pending', '2018-11-21'),
        ];
    }
}

export {
    HomePage,
};
