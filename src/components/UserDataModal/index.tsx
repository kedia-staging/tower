import React from "react";
import {
    createStyles,
    Modal,
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
import {
  convertToOtp,
  convertToUTCTime,
} from '../../helpers';

const styles = (theme: Theme) => createStyles({
    paper: {
        position: "absolute",
        left: "2%",
        top: "40%",
        width: "95%",
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4
    }
});

interface StyleProps extends WithStyles<typeof styles> {
    theme?: Theme;
}

interface UserModalProps {
    modalClose: () => void;
    open: boolean;
    user: any;
}

type Props = StyleProps & UserModalProps;

class UserModalComponent extends React.Component<Props> {
    public render() {
        const { classes, user, open } = this.props;

        return (
            <Modal
              open={this.props.open}
              onClose={this.handleClose}
            >
                <div className={classes.paper}>
                    <Table className="table-body">
                        <TableHead>
                            <TableRow>
                                <TableCell>UID</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>Level</TableCell>
                                <TableCell>Role</TableCell>
                                <TableCell>Labels</TableCell>
                                <TableCell>State</TableCell>
                                <TableCell>Created</TableCell>
                                <TableCell>Updated</TableCell>
                                <TableCell>OTP</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell>{user.uid}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.level}</TableCell>
                                <TableCell>{user.role}</TableCell>
                                <TableCell>{user.labels.map((label: any) => {
                                  return (
                                    <div key={label.key}>
                                      {label.key}: {label.value}
                                    </div>
                                  );
                                })}</TableCell>
                                <TableCell>{user.state}</TableCell>
                                <TableCell>{convertToUTCTime(user.created_at)}</TableCell>
                                <TableCell>{convertToUTCTime(user.updated_at)}</TableCell>
                                <TableCell>{convertToOtp(user.otp)}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </Modal>
        );
    }

    private handleClose = () => {
        this.props.modalClose();
    };
}

export const UserModal = withStyles(styles)(UserModalComponent);
