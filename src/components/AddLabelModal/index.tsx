import {
    Button,
    Grid,
    TextField,
} from '@material-ui/core';
import React from "react";
import {
    createStyles,
    Modal,
    Theme,
    Typography,
    WithStyles,
    withStyles,
} from '@material-ui/core';

const styles = (theme: Theme) => createStyles({
    paper: {
        display: 'block',
        margin: '100px auto',
        width: "360px",
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 2,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 312,
    },
    menu: {
        width: 400,
    }
});

interface StyleProps extends WithStyles<typeof styles> {
    theme?: Theme;
}

interface AddLabelProps {
    modalClose: () => void;
    open: boolean;
    addNewLabel: (key: string, value: string, scope: string) => void;
    name: string;
    value: string;
    scope: string;
    handleChangeLabelName: (name: string) => void;
    handleChangeLabelValue: (value: string) => void;
    handleChangeLabelScope: (scope: string) => void;
}

type Props = StyleProps & AddLabelProps;

const scopeTypes = [
    {
        value: 'Public',
        key: 'public',
    },
    {
        value: 'Private',
        key: 'private',
    },
];

class AddLabelModal extends React.Component<Props> {
    public render() {
        const {
            classes,
            open,
            name,
            value,
            scope,
        } = this.props;

        return (
            <Modal
                open={this.props.open}
                onClose={this.handleClose}
            >
                <Grid container direction={"column"} className={classes.paper}>
                    <Grid item>
                        <Typography variant="h5" component="h5" className={classes.textField}>
                            Edit Label
                        </Typography>
                    </Grid>
                    <Grid item>
                        <TextField
                            required
                            id="standard-required"
                            label="Key"
                            value={name}
                            onChange={this.handleChangeName}
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            required
                            id="standard-required"
                            label="Value"
                            value={value}
                            onChange={this.handleChangeValue}
                            className={classes.textField}
                            margin="normal"
                            variant="outlined"
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            select
                            value={scope}
                            label="Scope"
                            className={classes.textField}
                            onChange={this.handleChangeScope}
                            SelectProps={{
                                native: true,
                                MenuProps: {
                                    className: classes.menu,
                                },
                            }}
                            margin="normal"
                            variant="outlined"
                        >
                            {scopeTypes.map(option => (
                                <option key={option.key} value={option.key}>
                                    {option.value}
                                </option>
                            ))}
                        </TextField>
                    </Grid>
                    <Grid item>
                        <Grid container justify={"flex-end"} spacing={8} style={{ marginTop: 20 }}>

                            <Grid item>
                                <Button onClick={(e) => this.cancelAddingNewLabel()}>
                                    <Typography variant="h6" component="h6" style={{ color: "#3598D5" }}>
                                        CANCEL
                                    </Typography>
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button onClick={(e) => this.addLabel(name, value, scope)}>
                                    <Typography variant="h6" component="h6" style={{ color: "#3598D5" }}>
                                        OK
                                    </Typography>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Modal>
        );
    }

    private handleChangeName = (e: any) => {
        this.props.handleChangeLabelName(e.target.value.toLowerCase());
    };
    private handleChangeValue = (e: any) => {
        this.props.handleChangeLabelValue(e.target.value.toLowerCase());
    };

    private handleChangeScope = (e: any) => {
        this.props.handleChangeLabelScope(e.target.value);
    };

    private handleClose = () => {
        this.props.modalClose();
    };

    private addLabel = (key: string, value: string, scope: string) => {
        this.props.addNewLabel(key, value, scope);
        this.handleClose();
    };

    private cancelAddingNewLabel = () => {
        this.props.handleChangeLabelName('');
        this.props.handleChangeLabelValue('');
        this.handleClose();
    };
}

export const AddLabel = withStyles(styles)(AddLabelModal);