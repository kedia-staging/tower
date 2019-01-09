import {
    createStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Theme,
    Typography,
    WithStyles,
    withStyles,
} from '@material-ui/core';
import classnames from 'classnames';
import * as React from 'react';
import { Link } from 'react-router-dom';
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
};

const styles = (theme: Theme) => createStyles({
    link: {
        cursor: 'pointer',
        textDecoration: 'none',
        color: '#000',
        fontSize: '16px',
    },
});

interface StyleProps extends WithStyles<typeof styles> {
    theme?: Theme;
}

type Props = StyleProps & UserTableProps;

class UserTableComponent extends React.Component<Props> {
    public render() {
        const {
            classes,
            classNames,
            users
        } = this.props;
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
                                        <TableRow key={user.uid}>
                                            <TableCell>{user.uid}</TableCell>
                                            <TableCell component="th" scope="row">
                                                <Link to={`/users/${user.uid}`} className={classes.link}>{user.email}</Link>
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
}

export const UserTable = withStyles(styles)(UserTableComponent);
