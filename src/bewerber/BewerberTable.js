import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, IconButton } from '@mui/material';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
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
      <TableContainer style={{ width: '80%', display: 'flex', justifyContent: 'center'}}>
  <Table style={{ borderCollapse: 'collapse', width: '100%'}}>
    <TableHead>
      <TableRow style={{ fontWeight: 'bold', textAlign: 'left', backgroundColor: '#f1f1f1' }}>
        <TableCell>Refnr</TableCell>
        <TableCell>Von</TableCell>
        <TableCell>Berufe</TableCell>
        <TableCell>Ort</TableCell>
        <TableCell>Arbeitszeitmodelle</TableCell>
        <TableCell style={{ textAlign: 'center' }}>Details</TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {bewerber.map((data) => (
        <TableRow key={data.refnr} style={{ backgroundColor: (bewerber.indexOf(data) % 2 === 0) ? '#f2f2f2' : 'white' }}>
          <TableCell style={{ padding: '8px', width: '20%' }}>{data.refnr}</TableCell>
          <TableCell style={{ padding: '8px', width: '10%' }}>{data.verfuegbarkeitVon}</TableCell>
          <TableCell style={{ padding: '8px', width: '30%' }}>{data.berufe.join(", ")}</TableCell>
          <TableCell style={{ padding: '8px', width: '20%' }}>{data.lokation.ort}</TableCell>
          <TableCell style={{ padding: '8px' }}>{data.arbeitszeitModelle.join(", ")}</TableCell>
          <TableCell style={{ padding: '8px', textAlign: 'center' }}>
            <IconButton onClick={() => handleRowClick(data)}>
              <ReadMoreIcon />
            </IconButton>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>

    </>
  );
}

export default BewerberTable;