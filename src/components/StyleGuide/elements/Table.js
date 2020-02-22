import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function createData(description, hours) {
  return { description, hours };
}

const rows = [
  createData('Add custom button', '1h'),
  createData('Add icons and main colors', '0.5h'),
];

export default function SimpleTable() {

  return (
    <TableContainer component={Paper} className="table-container simple-table">
      <Table aria-label="simple table">
        <TableHead className="table-head">
          <TableRow>
          <TableCell>Description</TableCell>
          <TableCell align="right">Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="table-body">
          {rows.map(row => (
            <TableRow key={row.description}>
              <TableCell component="th" scope="row">
                {row.description}
              </TableCell>
              <TableCell align="right">{row.hours}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
