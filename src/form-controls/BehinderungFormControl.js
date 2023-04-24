import React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

function BehinderungFormControl(props) {
  const { value, onChange } = props;

  return (
    <FormControl style={{ width: '100%' }}>
      <InputLabel>Behinderung</InputLabel>
      <Select name="behinderung" value={value} onChange={onChange}>
        <MenuItem value="">Alle</MenuItem>
        <MenuItem value="an">
          Nur Schwerbehinderte oder ihnen gleichgestellte Bewerber*innen
          anzeigen
        </MenuItem>
      </Select>
    </FormControl>
  );
}

export default BehinderungFormControl;
