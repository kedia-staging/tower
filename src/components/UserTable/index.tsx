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
                    List of users
                </Typography>
                <div className="dashboard-table-container">
                    <Paper className={cx}>
                        <Table className="table-body">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Email</TableCell>
                                    <TableCell align={"right"}>Authorization method</TableCell>
                                    <TableCell numeric>Level</TableCell>
                                    <TableCell align={"right"}>Role</TableCell>
                                    <TableCell align={"right"}>UID</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {users.map(user => {
                                    return (
                                        <TableRow key={user.uid}>
                                            <TableCell component="th" scope="row">
                                                <Link to={`/users/${user.uid}`} className={classes.link}>{user.email}</Link>
                                            </TableCell>
                                            <TableCell align={"right"}>{convertToOtp(user.otp) === 'true' ? '2FA' : '-'}</TableCell>
                                            <TableCell numeric>{user.level}</TableCell>
                                            <TableCell align={"right"}>{user.role}</TableCell>
                                            <TableCell align={"right"}>{user.uid}</TableCell>
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
