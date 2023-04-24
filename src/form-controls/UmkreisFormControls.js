import React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

function UmkreisFormControl(props) {
  const { value, onChange } = props;

  return (
    <FormControl style={{ width: '100%' }}>
      <InputLabel>Umkreis</InputLabel>
      <Select name="umkreis" value={value} onChange={onChange}>
        <MenuItem value="">Alle</MenuItem>
        <MenuItem value="0">ganzer Ort</MenuItem>
        <MenuItem value="10">10km</MenuItem>
        <MenuItem value="15">15km</MenuItem>
        <MenuItem value="20">20km</MenuItem>
        <MenuItem value="50">50km</MenuItem>
        <MenuItem value="100">100km</MenuItem>
        <MenuItem value="200">200km</MenuItem>
      </Select>
    </FormControl>
  );
}

export default UmkreisFormControl;
