import classnames from 'classnames';
import * as React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  withStyles,
} from '@material-ui/core';

interface SimpleTableProps {
    classNames?: string;
};

interface TableRowDataInterface {
    id: number;
    name: string;
    calories: number;
    fat: number;
    carbs: number;
    protein: number;
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
                            <TableCell>Dessert (100g serving)</TableCell>
                            <TableCell numeric>Calories</TableCell>
                            <TableCell numeric>Fat (g)</TableCell>
                            <TableCell numeric>Carbs (g)</TableCell>
                            <TableCell numeric>Protein (g)</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map(n => {
                            return (
                                <TableRow key={n.id}>
                                    <TableCell component="th" scope="row">
                                      {n.name}
                                    </TableCell>
                                    <TableCell numeric>{n.calories}</TableCell>
                                    <TableCell numeric>{n.fat}</TableCell>
                                    <TableCell numeric>{n.carbs}</TableCell>
                                    <TableCell numeric>{n.protein}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        );
    }

    private createData = (name: string, calories: number, fat: number, carbs: number, protein: number) => {
        this.id += 1;
        const tableDataObject: TableRowDataInterface = {
            id: this.id,
            name: name,
            calories: calories,
            fat: fat,
            carbs: carbs,
            protein: protein,
        };
        return tableDataObject;
    };

    private getDataForTable = () => {
        return [
            this.createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
            this.createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
            this.createData('Eclair', 262, 16.0, 24, 6.0),
            this.createData('Cupcake', 305, 3.7, 67, 4.3),
            this.createData('Gingerbread', 356, 16.0, 49, 3.9),
        ];
    }
}
