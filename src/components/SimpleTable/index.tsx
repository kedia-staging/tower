import classnames from 'classnames';
import * as React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';

interface SimpleTableProps {
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

interface SimpleTableState {
    data: TableRowDataInterface[];
}

export class SimpleTable extends React.Component<SimpleTableProps, SimpleTableState> {
    id: number = 0;

    constructor(props: SimpleTableProps) {
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

        const cx = classnames('table table-root', classNames);

        return (
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
