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
    convertToOtp,
    convertToUTCTime,
} from '../../helpers';
import {
    UserInterface,
} from '../../modules';

interface UserTableProps {
    classNames?: string;
    users: UserInterface[];
    getUserData: (uid: string) => void;
};

class UserTableComponent extends React.Component<UserTableProps> {
    public render() {
        const { classNames, users } = this.props;
        const cx = classnames('table table-root', classNames);

        return (
            <div>
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
                                {users.map(user => {
                                    return (
                                        <TableRow key={user.id}>
                                            <TableCell>{user.uid}</TableCell>
                                            <TableCell component="th" scope="row">
                                            <span onClick={(e) => this.getUserData(user.uid)}>{user.email}</span>
                                            </TableCell>
                                            <TableCell numeric>{user.level}</TableCell>
                                            <TableCell>{user.role}</TableCell>
                                            <TableCell>{convertToOtp(user.otp)}</TableCell>
                                            <TableCell>{user.state}</TableCell>
                                            <TableCell>{convertToUTCTime(user.created_at)}</TableCell>
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

    private getUserData = (uid: string) => {
        this.props.getUserData(uid);
    }
}

export const UserTable = UserTableComponent;
