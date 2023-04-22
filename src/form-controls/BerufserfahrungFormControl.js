import React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

function BerufserfahrungFormControl(props) {
  const { value, onChange } = props;

  return (
    <FormControl>
      <InputLabel>Berufserfahrung</InputLabel>
      <Select name="berufserfahrung" value={value} onChange={onChange}>
        <MenuItem value="">None</MenuItem>
        <MenuItem value="be">Berufseinsteiger*innen</MenuItem>
        <MenuItem value="mb">Mit Berufserfahrung</MenuItem>
      </Select>
    </FormControl>
  );
}

export default BerufserfahrungFormControl;