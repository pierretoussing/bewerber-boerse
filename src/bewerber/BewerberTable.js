import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import React, { useState } from 'react';
import BewerberDetailsModule from './BewerberDetailsModule';
 
function BewerberTable(props) {

  const { bewerber } = props;

  const [open, setOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState({});

  const handleRowClick = (data) => {
    setSelectedRow(data);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedRow({});
  };

  return (
    <>
      <BewerberDetailsModule open={open} handleClose={handleClose} data={selectedRow}/>
      <TableContainer component={Paper} style={{ width: '80%' }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Refnr</TableCell>
            <TableCell>Von</TableCell>
            <TableCell>Berufe</TableCell>
            <TableCell>Lokation</TableCell>
            <TableCell>Arbeitszeitmodelle</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bewerber.map((data) => (
            <TableRow key={data.refnr} onClick={() => handleRowClick(data)}>
              <TableCell>{data.refnr}</TableCell>
              <TableCell>{data.verfuegbarkeitVon}</TableCell>
              <TableCell>{data.berufe.join(", ")}</TableCell>   
              <TableCell>{data.lokation.ort}</TableCell>
              <TableCell>{data.arbeitszeitModelle.join(", ")}</TableCell>  
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>
    </>
  );
}

export default BewerberTable;