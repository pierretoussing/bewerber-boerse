import React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

function ArbeitszeitFormControl(props) {
  const { value, onChange } = props;

  return (
    <FormControl style={{ width: '100%' }}>
        <InputLabel>Arbeitszeit</InputLabel>
        <Select name='arbeitszeit' value={value} onChange={onChange}>
            <MenuItem value=''>Alle</MenuItem>
            <MenuItem value='vz'>Vollzeit</MenuItem>
            <MenuItem value='tz'>Teilzeit</MenuItem>
            <MenuItem value='snw'>Schicht,Nacht,Wochenende</MenuItem>
            <MenuItem value='ht'>Heim-/Telearbeit</MenuItem>
            <MenuItem value='mj'>Minijob</MenuItem>
        </Select>
    </FormControl>
  );
}

export default ArbeitszeitFormControl;