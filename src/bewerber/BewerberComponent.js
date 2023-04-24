import React, { useState } from 'react';
import { fetchData } from '../data/api';
import { CircularProgress, Button, Grid } from '@mui/material';
import BewerberForm from '../form-controls/BewerberForm';
import BewerberTable from './BewerberTable';


function BewerberComponent() {
  const [bewerber, setBewerber] = useState(null);
  const [numResults, setNumResults] = useState(0)
  const [params, setParams] = useState({
    angebotsart: '',
    arbeitszeit: '',
    ausbildungsart:'',
    behinderung: '',
    berufserfahrung: '',
    umkreis: '',
    vertragsart: '',
    was: '',
    wo: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true)
    fetchData(params)
      .then(data => {
        console.log(data)
        setBewerber(data.bewerber);
        setNumResults(data.maxErgebnisse)
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
        <Button variant="contained" color="primary" onClick={handleClick}>Suchen</Button>
      </Grid>
      {isLoading ? (
        <Grid item xs={12}>
          <CircularProgress/>
        </Grid>
      ) :
      (
        bewerber ? 
        (
          <>
            <Grid item xs={12}>
              <p>{numResults} Ergebnisse gefunden</p>
            </Grid>
            <BewerberTable bewerber={bewerber}/>
          </>
        )
        :
        <></>
      )
      }
    </Grid>
  );
}

export default BewerberComponent;
