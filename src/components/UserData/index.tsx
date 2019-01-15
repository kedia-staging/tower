import {
    Button,
    createStyles,
    Grid,
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
import SvgIcon from '@material-ui/core/SvgIcon';
import React from "react";
import { AddLabel } from '../';
import {
    convertToOtp,
    convertToUTCTime,
} from '../../helpers';

interface UserDataProps {
    addNewLabel: (key: string, value: string, scope: string) => void;
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
    openModal: (key: string, value: string, scope: string) => void;
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
    label: {
        height: 40,
        paddingLeft: 16,
        borderRadius: 24,
        width: 'auto',
        cursor: "pointer",
    },
    icon: {
        width: 32,
        height: 32,
        margin: 4,
        cursor: "pointer",
    },
    labelName: {
        paddingTop: 8,
        color: "#ffffff",
        fontSize: 16,
        marginRight: 7,
    },
    focus: {
        '&:focus': {
            backgroundColor: '#ffffff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
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
                <Grid container>
                    <a style={{ marginRight: 15 }} href='/tower'>
                        <SvgIcon className={classes.icon} viewBox="0 0 24 24">
                          <path fill="#3598D5" d="M20,11V13H8L13.5,18.5L12.08,19.92L4.16,12L12.08,4.08L13.5,5.5L8,11H20Z" />
                        </SvgIcon>
                    </a>
                    <Typography variant="h4" gutterBottom component="h4" style={{ color: "#3598D5" }}>
                        Account info
                    </Typography>
                </Grid>
                <Paper style={{ padding: 20, marginBottom: 15 }}>
                    <Grid container justify={"space-between"}>
                        <Typography variant="h3" gutterBottom component="h3">
                            {user.email}
                        </Typography>
                        <Typography variant="h6" gutterBottom component="h6">
                            <TextField
                                select
                                InputProps={{ className: classes.focus }}
                                value={user.state}
                                label="State"
                                variant="outlined"
                                className={classes.textField}
                                onChange={this.changeUserState}
                                SelectProps={{
                                    native: true,
                                    MenuProps: {
                                        className: classes.menu,
                                    },
                                }}
                            >
                                {stateTypes.map(option => (
                                    <option key={option.key} value={option.key}>
                                        {option.value}
                                    </option>
                                ))}
                            </TextField>
                        </Typography>
                    </Grid>
                    <br/>
                    <Grid container justify={"space-between"} style={{ marginTop: 20, marginBottom: 40 }}>
                        <Grid item xs={3}>
                            <Typography variant="h6" gutterBottom component="h6">
                                Level
                                <br/>
                                {user.level}
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" gutterBottom component="h6">
                                Authorization
                                <br/>
                                {convertToOtp(user.otp) === 'true' ? '2FA' : '-'}
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" gutterBottom component="h6">
                                Role
                                <br/>
                                {user.role}
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" gutterBottom component="h6" align={"right"}>
                                UID
                                <br/>
                                {user.uid}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container justify={"space-between"} style={{ marginTop: 20, marginBottom: 40 }}>
                        <Grid item xs={3}>
                            <Typography variant="h6" gutterBottom component="h6">
                                Phone number
                                <br/>
                                {user.phones[0].number}
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" gutterBottom component="h6">
                                Country
                                <br/>
                                {user.profile.country}
                            </Typography>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" gutterBottom component="h6">
                                Validated at
                                <br/>
                                {convertToUTCTime(user.phones[0].validated_at)}
                            </Typography>
                        </Grid>
                        <Grid item xs={3}/>
                    </Grid>
                    <Typography variant="h5" gutterBottom component="h5">
                        Labels
                    </Typography>
                    <Grid container justify={"flex-start"} spacing={16}>
                        {user.labels.map((label: any) => {
                            switch (label.key) {
                                case 'email': return (
                                    <Grid item>
                                        <Grid container justify={"space-between"} className={classes.label} style={{ backgroundColor: "#43A047" }}>
                                            <Typography onClick={(e) => this.openAddLabelModal(label.key, label.value, label.scope)} className={classes.labelName}>
                                                email:{label.value}
                                            </Typography>
                                            <SvgIcon onClick={(e) => this.deleteLabel(user.uid, 'email', 'private')} className={classes.icon} viewBox="0 0 32 32">
                                                <path d="m15,0.25c8.15675,0 14.75,6.59325 14.75,14.75c0,8.15675 -6.59325,14.75 -14.75,14.75c-8.15675,0 -14.75,-6.59325 -14.75,-14.75c0,-8.15675 6.59325,-14.75 14.75,-14.75m5.29525,7.375l-5.29525,5.29525l-5.29525,-5.29525l-2.07975,2.07975l5.29525,5.29525l-5.29525,5.29525l2.07975,2.07975l5.29525,-5.29525l5.29525,5.29525l2.07975,-2.07975l-5.29525,-5.29525l5.29525,-5.29525l-2.07975,-2.07975z" id="svg_1" fill="#ffffff" stroke="null"/>
                                            </SvgIcon>
                                        </Grid>
                                    </Grid>
                                );
                                case 'phone': return (
                                    <Grid item>
                                        <Grid container justify={"space-between"} className={classes.label} style={{ backgroundColor: "#009688" }}>
                                            <Typography onClick={(e) => this.openAddLabelModal(label.key, label.value, label.scope)} className={classes.labelName}>
                                                phone:{label.value}
                                            </Typography>
                                            <SvgIcon onClick={(e) => this.deleteLabel(user.uid, 'phone', 'private')} className={classes.icon} viewBox="0 0 32 32">
                                                <path d="m15,0.25c8.15675,0 14.75,6.59325 14.75,14.75c0,8.15675 -6.59325,14.75 -14.75,14.75c-8.15675,0 -14.75,-6.59325 -14.75,-14.75c0,-8.15675 6.59325,-14.75 14.75,-14.75m5.29525,7.375l-5.29525,5.29525l-5.29525,-5.29525l-2.07975,2.07975l5.29525,5.29525l-5.29525,5.29525l2.07975,2.07975l5.29525,-5.29525l5.29525,5.29525l2.07975,-2.07975l-5.29525,-5.29525l5.29525,-5.29525l-2.07975,-2.07975z" id="svg_1" fill="#ffffff" stroke="null"/>
                                            </SvgIcon>
                                        </Grid>
                                    </Grid>
                                );
                                case 'documents': return (
                                    <Grid item>
                                        <Grid container justify={"space-between"} className={classes.label} style={{ backgroundColor: "#3F51B5" }}>
                                            <Typography onClick={(e) => this.openAddLabelModal(label.key, label.value, label.scope)} className={classes.labelName}>
                                                document:{label.value}
                                            </Typography>
                                            <SvgIcon onClick={(e) => this.deleteLabel(user.uid, 'documents', 'private')} className={classes.icon} viewBox="0 0 32 32">
                                                <path d="m15,0.25c8.15675,0 14.75,6.59325 14.75,14.75c0,8.15675 -6.59325,14.75 -14.75,14.75c-8.15675,0 -14.75,-6.59325 -14.75,-14.75c0,-8.15675 6.59325,-14.75 14.75,-14.75m5.29525,7.375l-5.29525,5.29525l-5.29525,-5.29525l-2.07975,2.07975l5.29525,5.29525l-5.29525,5.29525l2.07975,2.07975l5.29525,-5.29525l5.29525,5.29525l2.07975,-2.07975l-5.29525,-5.29525l5.29525,-5.29525l-2.07975,-2.07975z" id="svg_1" fill="#ffffff" stroke="null"/>
                                            </SvgIcon>
                                        </Grid>
                                    </Grid>
                                );
                                default: return (
                                    <Grid item>
                                        <Grid container justify={"space-between"} className={classes.label} style={{ backgroundColor: "#e0e0e0" }}>
                                            <Typography onClick={(e) => this.openAddLabelModal(label.key, label.value, label.scope)} style={{ paddingTop: 8, color: "#757575", fontSize: 16, marginRight: 7 }}>
                                                {label.key}
                                            </Typography>
                                            <SvgIcon onClick={(e) => this.deleteLabel(user.uid, 'documents', 'private')} className={classes.icon} viewBox="0 0 32 32">
                                                <path d="m15,0.25c8.15675,0 14.75,6.59325 14.75,14.75c0,8.15675 -6.59325,14.75 -14.75,14.75c-8.15675,0 -14.75,-6.59325 -14.75,-14.75c0,-8.15675 6.59325,-14.75 14.75,-14.75m5.29525,7.375l-5.29525,5.29525l-5.29525,-5.29525l-2.07975,2.07975l5.29525,5.29525l-5.29525,5.29525l2.07975,2.07975l5.29525,-5.29525l5.29525,5.29525l2.07975,-2.07975l-5.29525,-5.29525l5.29525,-5.29525l-2.07975,-2.07975z" id="svg_1" fill="#ffffff" stroke="null"/>
                                            </SvgIcon>
                                        </Grid>
                                    </Grid>
                                );
                            }
                        })}
                        <Grid item>
                            <Button onClick={(e) => this.openAddLabelModal('', '', 'public')}>
                                <Typography variant="h6" component="h6" style={{ color: "#3598D5" }}>
                                    ADD NEW LABEL
                                </Typography>
                            </Button>
                        </Grid>
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
                    </Grid>
                    <Typography variant="h5" gutterBottom component="h5" style={{ marginTop: 40 }}>
                        Documents
                    </Typography>
                    <Table className="table-body" padding="none">
                        <TableHead>
                            <TableRow>
                                <TableCell>Doc type</TableCell>
                                <TableCell align={"right"}>Doc number</TableCell>
                                <TableCell align={"right"}>Doc expire</TableCell>
                                <TableCell align={"right"}>Photos</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {user.documents.map((document: any) => {
                                return (
                                    <TableRow>
                                        <TableCell component="th" scope="row">
                                            {document.doc_type}
                                        </TableCell>
                                        <TableCell align={"right"}>
                                            {document.doc_number}
                                        </TableCell>
                                        <TableCell align={"right"}>
                                            {document.doc_expire}
                                        </TableCell>
                                        <TableCell align={"right"}>
                                            <a href={document.upload.url}>{document.doc_type} image</a>
                                        </TableCell>
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </Paper>
                <Grid container justify={"center"} spacing={40}>
                    <Grid item>
                        <Typography style={{ color: "#757575" }}>
                            Created at: {convertToUTCTime(user.created_at)}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography style={{ color: "#757575" }}>
                            Last activity: {convertToUTCTime(user.updated_at)}
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        );
    }

    private openAddLabelModal = (key: string, value: string, scope: string) => {
        this.props.openModal(key, value, scope);
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
