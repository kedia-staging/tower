import {
    Button,
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
        width: "680px",
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 2,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    menu: {
        width: 200,
    },
    button: {
        background: '#000000',
        color: '#fff',
        marginTop: theme.spacing.unit * 2,
        marginBottom: theme.spacing.unit * 2,
        marginLeft: theme.spacing.unit * 1.5,
        marginRight: theme.spacing.unit * 1.5,
        width: 300,
    }
});

interface StyleProps extends WithStyles<typeof styles> {
    theme?: Theme;
}

interface AddLabelProps {
    modalClose: () => void;
    open: boolean;
    addNewLabel: () => void;
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
                <div className={classes.paper}>
                    <TextField
                        required
                        id="standard-required"
                        label="Label Name"
                        value={name}
                        onChange={this.handleChangeName}
                        className={classes.textField}
                        margin="normal"
                    />
                    <TextField
                        required
                        id="standard-required"
                        label="Label Value"
                        value={value}
                        onChange={this.handleChangeValue}
                        className={classes.textField}
                        margin="normal"
                    />
                    <TextField
                        select
                        value={scope}
                        label="Label scope"
                        className={classes.textField}
                        onChange={this.handleChangeScope}
                        SelectProps={{
                            native: true,
                            MenuProps: {
                                className: classes.menu,
                            },
                        }}
                        margin="normal"
                      >
                        {scopeTypes.map(option => (
                            <option key={option.key} value={option.key}>
                              {option.value}
                            </option>
                        ))}
                    </TextField>
                    <Button
                        className={classes.button}
                        onClick={this.addLabel}>Add
                    </Button>
                    <Button
                        className={classes.button}
                        onClick={this.cancelAddingNewLabel}>Cancel
                    </Button>
                </div>
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

    private addLabel = () => {
        this.props.addNewLabel();
        this.handleClose();
    };

    private cancelAddingNewLabel = () => {
        this.props.handleChangeLabelName('');
        this.props.handleChangeLabelValue('');
        this.handleClose();
    };
}

export const AddLabel = withStyles(styles)(AddLabelModal);
