import {
    Button,
    createStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TextField,
    Theme,
    Typography,
    WithStyles,
    withStyles,
} from '@material-ui/core';
import React from "react";
import { AddLabel } from '../';
import {
    convertToOtp,
    convertToUTCTime,
} from '../../helpers';

interface UserDataProps {
    addNewLabel: () => void;
    changeLabelName: (value: string) => void;
    changeLabelScope: (value: string) => void;
    changeLabelValue: (value: string) => void;
    changeState: (value: string) => void;
    closeModal: () => void;
    deleteUserLabel: (uid: string, key: string, scope: string) => void;
    newLabelName: string;
    newLabelScope: string;
    newLabelValue: string;
    openAddLabelModal: boolean;
    openModal: () => void;
    user: any;
}

const styles = (theme: Theme) => createStyles({
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    menu: {
        width: 200,
    },
});

const stateTypes = [
    {
      value: 'Active',
      key: 'active',
    },
    {
      value: 'Banned',
      key: 'banned',
    },
];

interface StyleProps extends WithStyles<typeof styles> {
    theme?: Theme;
}

type Props = StyleProps & UserDataProps;

class UserDataComponent extends React.Component<Props> {
    public render() {
        const {
            classes,
            user,
            openAddLabelModal,
            newLabelName,
            newLabelValue,
            newLabelScope,
        } = this.props;

        return (
            <div className="user-data">
                <Typography variant="h5" gutterBottom component="h5">
                    Email: {user.email}
                </Typography>
                <Typography variant="h6" gutterBottom component="h6">
                    User UID: {user.uid}
                </Typography>
                <Typography variant="h6" gutterBottom component="h6">
                    Level: {user.level}
                </Typography>
                <Typography variant="h6" gutterBottom component="h6">
                    OTP: {convertToOtp(user.otp)}
                </Typography>
                <Typography variant="h6" gutterBottom component="h6">
                    Role: {user.role}
                </Typography>
                <Typography variant="h6" gutterBottom component="h6">
                    <TextField
                        select
                        value={user.state}
                        label="User State"
                        className={classes.textField}
                        onChange={this.changeUserState}
                        SelectProps={{
                            native: true,
                            MenuProps: {
                                className: classes.menu,
                            },
                        }}
                        margin="normal"
                      >
                        {stateTypes.map(option => (
                            <option key={option.key} value={option.key}>
                              {option.value}
                            </option>
                        ))}
                    </TextField>
                </Typography>
                <Typography variant="h6" gutterBottom component="h6">
                    Created At: {convertToUTCTime(user.created_at)}
                </Typography>
                <Typography variant="h6" gutterBottom component="h6">
                    Updated At: {convertToUTCTime(user.updated_at)}
                </Typography>
                <Typography variant="h6" gutterBottom component="h6">
                    Labels:
                </Typography>
                <Paper>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Label</TableCell>
                                <TableCell>Value</TableCell>
                                <TableCell>Scope</TableCell>
                                <TableCell>Created At</TableCell>
                                <TableCell>Updated At</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {user.labels.map((label: any) => {
                                return (
                                    <TableRow key={label.key}>
                                        <TableCell>{label.key}</TableCell>
                                        <TableCell>{label.value}</TableCell>
                                        <TableCell>{label.scope}</TableCell>
                                        <TableCell>{convertToUTCTime(label.created_at)}</TableCell>
                                        <TableCell>{convertToUTCTime(label.updated_at)}</TableCell>
                                        <TableCell>
                                            <Button onClick={(e) => this.deleteLabel(user.uid, label.key, label.scope)}>
                                              Delete label
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                        <Button onClick={(e) => this.openAddLabelModal()}>
                            Add new Label
                        </Button>
                        <AddLabel
                            addNewLabel={this.props.addNewLabel}
                            handleChangeLabelName={this.props.changeLabelName}
                            handleChangeLabelScope={this.props.changeLabelScope}
                            handleChangeLabelValue={this.props.changeLabelValue}
                            modalClose={this.modalClose}
                            name={newLabelName}
                            open={this.props.openAddLabelModal}
                            scope={newLabelScope}
                            value={newLabelValue}
                        />
                    </Table>
                </Paper>
            </div>
        );
    }

    private openAddLabelModal = () => {
        this.props.openModal();
    };

    private modalClose = () => {
        this.props.closeModal();
    };

    private deleteLabel = (uid: string, key: string, scope: string) => {
        this.props.deleteUserLabel(uid, key, scope);
    };

    private changeUserState = (e: any) => {
        this.props.changeState(e.target.value);
    };
}

export const UserData = withStyles(styles)(UserDataComponent);
