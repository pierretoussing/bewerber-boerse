import React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

function AngebotsartFormControl(props) {
  const { value, onChange } = props;

  return (
    <FormControl style={{ width: '100%' }}>
    <InputLabel>Angebotsart</InputLabel>
    <Select name="angebotsart" value={value} onChange={onChange}>
      <MenuItem value="">Alle</MenuItem>
      <MenuItem value="ar">Arbeitskräfte</MenuItem>
      <MenuItem value="au">Auszubildende/Duales Studium</MenuItem>
      <MenuItem value="pt">Praktikanten/Trainees</MenuItem>
      <MenuItem value="se">Selbstständige</MenuItem>
    </Select>
  </FormControl>
  );
}

export default AngebotsartFormControl;