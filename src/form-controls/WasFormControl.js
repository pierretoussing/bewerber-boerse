import React from 'react';
import TextField from '@mui/material/TextField';

function WasFormControl(props) {
  const { value, onChange } = props;

  return (
    <TextField label='Was' name='was' value={value} onChange={onChange} style={{ width: '100%' }}/>
  );
}

export default WasFormControl;
