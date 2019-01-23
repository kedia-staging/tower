import React from 'react';
import { createStyles, Theme } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Tooltip from '@material-ui/core/Tooltip';
import {Link} from "react-router-dom";
import { convertToOtp, convertToUTCTime } from "../../helpers";

function desc(a: any, b: any, orderBy: any) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function stableSort(array: any, cmp: any) {
    const stabilizedThis = array.map((el: any, index: any) => [el, index]);
    stabilizedThis.sort((a: any, b: any) => {
        const order = cmp(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el: any) => el[0]);
}

function getSorting(order: string, orderBy: string) {
    return order === 'desc' ? (a: any, b: any) => desc(a, b, orderBy) : (a: any, b: any) => -desc(a, b, orderBy);
}

type Props = EnchancedTableProps;

class EnhancedTableHead extends React.Component<Props> {
    props: any;
    createSortHandler = (property: any) => (event: any) => {
        this.props.onRequestSort(event, property);
    };

    render() {
        const { order, orderBy } = this.props;

        return (
            <TableHead>
                <TableRow>
                    {this.props.rows.map((row: {key: string, alignRight: boolean, label: string}) => (
                            <TableCell
                                key={row.key}
                                align={row.alignRight ? 'right' : 'left'}
                                sortDirection={orderBy === row.key ? order : false}
                            >
                                <Tooltip
                                    title="Sort"
                                    placement={row.alignRight ? 'bottom-end' : 'bottom-start'}
                                    enterDelay={300}
                                >
                                    <TableSortLabel
                                        active={orderBy === row.key}
                                        direction={order}
                                        onClick={this.createSortHandler(row.key)}
                                    >
                                        {row.label}
                                    </TableSortLabel>
                                </Tooltip>
                            </TableCell>
                        ),
                        this,
                    )}
                </TableRow>
            </TableHead>
        );
    }
}

interface EnchancedTableProps {
    rows: { key: string; alignRight: boolean; label: string; }[];
    data: any;
}

const styles = (theme: Theme) => (createStyles({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
    },
    table: {
        minWidth: 1020,
    },
    tableWrapper: {
        overflowX: 'auto',
    },
    link: {
        cursor: 'pointer',
        textDecoration: 'none',
        color: '#3598D5',
        fontSize: '16px',
    },
}));

class EnhancedTableComponent extends React.Component<Props> {
    props: any;
    state = {
        order: 'asc',
        orderBy: this.props.rows[0].key,
        page: 0,
        rowsPerPage: 5,
    };

    handleRequestSort = (event: any, property: any) => {
        const orderBy = property;
        let order = 'desc';

        if (this.state.orderBy === property && this.state.order === 'desc') {
            order = 'asc';
        }

        this.setState({ order, orderBy });
    };

    handleChangePage = (event: any, page: any) => {
        this.setState({ page });
    };

    handleChangeRowsPerPage = (event: any) => {
        this.setState({ rowsPerPage: event.target.value });
    };

    render() {
        const { classes, rows, data } = this.props;
        const { order, orderBy, rowsPerPage, page } = this.state;
        const emptyRows = rowsPerPage - Math.min(rowsPerPage, data.length - page * rowsPerPage);

        return (
            <div className={classes.root}>
                <div className={classes.tableWrapper}>
                    <Table className={classes.table} aria-labelledby="tableTitle">
                        <EnhancedTableHead
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={this.handleRequestSort}
                            rows={rows}
                        />
                        <TableBody>
                            {stableSort(data, getSorting(order, orderBy))
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((n: any, i: number) => {
                                    return (
                                        <TableRow key={i}>
                                            {rows.map((row: any, index: number) => {
                                                return (
                                                    <TableCell key={index} component="th" align={row.alignRight ? 'right' : 'left'}>
                                                        { row.key === 'email' ? (<Link to={`/users/${n.uid}`} className={classes.link}>{n.email}</Link>)
                                                            : row.key === 'otp' ? (convertToOtp(n.otp) === 'true' ? '2FA' : '-')
                                                                : row.key === 'upload' ? (<a target='_blank' href={n.upload.url} className={classes.link}>Image</a>)
                                                                    : row.key === 'created_at' || row.key === 'validated_at' || row.key === 'updated_at' ? (convertToUTCTime(n[row.key])) : n[row.key]}
                                                    </TableCell>
                                                )
                                            })
                                            }
                                        </TableRow>
                                    );
                                })}
                            {emptyRows > 0 && (
                                <TableRow style={{ height: 49 * emptyRows }}>
                                    <TableCell colSpan={6} />
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25]}
                    component="div"
                    count={data.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    backIconButtonProps={{
                        'aria-label': 'Previous Page',
                    }}
                    nextIconButtonProps={{
                        'aria-label': 'Next Page',
                    }}
                    onChangePage={this.handleChangePage}
                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                />
            </div>
        );
    }
}

export const EnchancedTable = withStyles(styles)(EnhancedTableComponent);