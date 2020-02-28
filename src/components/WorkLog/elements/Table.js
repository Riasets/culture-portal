import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

export default function SimpleTable(props) {

  return (
    <TableContainer component={Paper} className="table-container simple-table">
      <Table aria-label="simple table">
        <TableHead className="table-head">
          <TableRow>
          <TableCell>Feature</TableCell>
          <TableCell align="right">Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="table-body">
          {props.rows.map(row => (
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
