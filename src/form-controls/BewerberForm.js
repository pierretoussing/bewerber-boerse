import React from 'react';
import { Grid } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WasFormControl from '../form-controls/WasFormControl';
import AusbildungsartFormControl from '../form-controls/AusbildungsartFormControl';
import WoFormControl from '../form-controls/WoFormControl';
import UmkreisFormControl from '../form-controls/UmkreisFormControls';
import AngebotsartFormControl from '../form-controls/AngebotsartFormControl';
import ArbeitszeitFormControl from '../form-controls/ArbeitszeitFormControl';
import BerufserfahrungFormControl from '../form-controls/BerufserfahrungFormControl';
import VertragsartFormControl from '../form-controls/VertragsartFormControl';
import BehinderungFormControl from '../form-controls/BehinderungFormControl';


function BewerberForm(props) {
  const { params, onChange } = props;

  return (
    <Grid container spacing={2} justifyContent="center" style={{ maxWidth: '600px' }}>
      <Grid container item xs={12} spacing={2}>
        <Grid item xs={6}>
          <WasFormControl value={params.was} onChange={onChange} fullWidth />
        </Grid>
        <Grid item xs={6}>
          <WoFormControl value={params.wo} onChange={onChange} fullWidth />
        </Grid>
      </Grid>
        <Grid item xs={12}>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                >
                  {"Mehr Filter"}
                </AccordionSummary>
                <AccordionDetails>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <AusbildungsartFormControl value={params.ausbildungsart} onChange={onChange} fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                      <UmkreisFormControl value={params.umkreis} onChange={onChange} fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                      <AngebotsartFormControl value={params.angebotsart} onChange={onChange} fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                      <ArbeitszeitFormControl value={params.arbeitszeit} onChange={onChange} fullWidth />
                    </Grid>
                    <Grid item xs={4}>
                      <BerufserfahrungFormControl value={params.berufserfahrung} onChange={onChange} fullWidth />
                    </Grid>
                    <Grid item xs={4}>
                      <VertragsartFormControl value={params.vertragsart} onChange={onChange} fullWidth />
                    </Grid>
                    <Grid item xs={4}>
                      <BehinderungFormControl value={params.behinderung} onChange={onChange} fullWidth />
                    </Grid>
                  </Grid>
                </AccordionDetails>
              </Accordion>
          </Grid>
        </Grid>
  );
}

export default BewerberForm;