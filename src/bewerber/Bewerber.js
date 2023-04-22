import React, { useState } from 'react';
import { fetchBewerber } from '../data/api';
import { CircularProgress, Button, Grid } from '@mui/material';
import BewerberForm from '../form-controls/BewerberForm';


function BewerberComponent() {
  const [bewerber, setBewerber] = useState(null);
  const [params, setParams] = useState({
    was: '',
    ausbildungsart: '',
    wo: '',
    umkreis: '',
    angebotsart: '',
    arbeitszeit: '',
    berufserfahrung: '',
    vertragsart: '',
    behinderung: '',
    page: '',
    size: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setBewerber(null)
    setIsLoading(true)
    fetchBewerber(params)
      .then(bewerber => {
        console.log(bewerber)
        setBewerber(bewerber);
        setIsLoading(false)
      });
  };

  const handleChange = (event) => {
    setParams({
      ...params,
      [event.target.name]: event.target.value
    });
  };

  return (
    <Grid container spacing={2} justifyContent="center">
      <BewerberForm params={params} onChange={handleChange}/>
      <Grid item xs={12}>
        <Button variant="contained" color="primary" onClick={handleClick}>Search</Button>
      </Grid>
  {isLoading ? (
    <div>
       <CircularProgress/>
    </div>
  ) :
  (
    bewerber ? 
    (
      <ul>
        {bewerber.map(item => (
          <li key={item.refnr}>{item.refnr}</li>
        ))}
      </ul>
    )
    :
    <p></p>
  )
  }
  </Grid>
);
}

export default BewerberComponent;
