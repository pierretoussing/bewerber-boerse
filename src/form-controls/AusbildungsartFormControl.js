import React from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

function AusbildungsartFormControl(props) {
  const { value, onChange } = props;

  return (
    <FormControl style={{ width: '100%' }}>
      <InputLabel>Ausbildungsart</InputLabel>
      <Select name="ausbildungsart" value={value} onChange={onChange}>
        <MenuItem value="">Alle</MenuItem>
        <MenuItem value="au">Ausbildung</MenuItem>
        <MenuItem value="dsa">
          Duales Studium (ausbildungsintegrierend)
        </MenuItem>
        <MenuItem value="dsp">Duales Studium (praxisintegrierend)</MenuItem>
      </Select>
    </FormControl>
  );
}

export default AusbildungsartFormControl;
