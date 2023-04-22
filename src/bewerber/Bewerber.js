import React, { useState } from 'react';
import { fetchBewerber } from '../data/api';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@mui/material/Button';
import WasFormControl from '../form-controls/WasFormControl';
import AusbildungsartFormControl from '../form-controls/AusbildungsartFormControl';
import WoFormControl from '../form-controls/WoFormControl';
import UmkreisFormControl from '../form-controls/UmkreisFormControls';
import AngebotsartFormControl from '../form-controls/AngebotsartFormControl';
import ArbeitszeitFormControl from '../form-controls/ArbeitszeitFormControl';
import BerufserfahrungFormControl from '../form-controls/BerufserfahrungFormControl';
import VertragsartFormControl from '../form-controls/VertragsartFormControl';
import BehinderungFormControl from '../form-controls/BehinderungFormControl';

function BewerberComponent() {
  const [bewerber, setBewerber] = useState(null);
  const [params, setParams] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setBewerber(null)
    setIsLoading(true)
    fetchBewerber(params)
      .then(bewerber => {
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
    <div>
      <form>
        <WasFormControl value={params.was} onChange={handleChange} />
        <AusbildungsartFormControl value={params.ausbildungsart} onChange={handleChange}/>
        <WoFormControl value={params.wo} onChange={handleChange} />
        <UmkreisFormControl value={params.umkreis} onChange={handleChange}/>
        <AngebotsartFormControl value={params.angebotsart} onChange={handleChange}/>
        <ArbeitszeitFormControl value={params.arbeitszeit} onChange={handleChange}/>
        <BerufserfahrungFormControl value={params.berufserfahrung} onChange={handleChange}/>
        <VertragsartFormControl value={params.vertragsart} onChange={handleChange}/>
        <BehinderungFormControl value={params.behinderung} onChange={handleChange}/>
  </form>
  <Button variant="contained" onClick={handleClick}>Search</Button>
  {isLoading ? (
    <CircularProgress />
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
</div>
);
}

export default BewerberComponent;
