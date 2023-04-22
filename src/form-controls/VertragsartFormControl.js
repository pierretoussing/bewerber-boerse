import React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

function VertragsartFormControl(props) {
  const { value, onChange } = props;

  return (
    <FormControl style={{ width: '100%' }}>
      <InputLabel>Vertragsart</InputLabel>
      <Select name="vertragsart" value={value} onChange={onChange}>
        <MenuItem value="">Alle</MenuItem>
        <MenuItem value="be">Befristet</MenuItem>
        <MenuItem value="ub">Unbefristet</MenuItem>
      </Select>
    </FormControl>
  );
}

export default VertragsartFormControl;