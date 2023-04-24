import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5">Arbeitsagentur Bewerberbörse</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
