import React from 'react';
import TextField from '@mui/material/TextField';

function WoFormControl(props) {
  const { value, onChange } = props;

  return (
    <TextField
      label="Wo"
      name="wo"
      value={value}
      onChange={onChange}
      style={{ width: '100%' }}
    />
  );
}

export default WoFormControl;
