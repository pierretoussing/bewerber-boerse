import React, { useState } from 'react';
import { fetchData } from '../data/api';
import { CircularProgress, Button, Grid, Tooltip } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import BewerberForm from '../form-controls/BewerberForm';
import BewerberTable from './BewerberTable';

function BewerberComponent() {
  const pageSize = 10;
  const requestSize = 10 * pageSize;

  const defaultSearchParams = {
    angebotsart: '',
    arbeitszeit: '',
    ausbildungsart: '',
    behinderung: '',
    berufserfahrung: '',
    umkreis: '',
    vertragsart: '',
    was: '',
    wo: '',
  };

  const defaultRequestParams = {
    ...defaultSearchParams,
    page: 1,
    size: requestSize,
  };

  const [bewerber, setBewerber] = useState({});
  const [numResults, setNumResults] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [requestNumber, setRequestNumber] = useState(1);
  const [searchParams, setSearchParams] = useState(defaultSearchParams);
  const [requestParams, setRequestParams] = useState(defaultRequestParams);
  const [isLoading, setIsLoading] = useState(false);
  const [batchNum, setBatchNum] = useState(1);

  const saveBewerberBatches = (newBewerberArray, page) => {
    setBewerber((prevBewerber) => {
      const newBewerber = { ...prevBewerber };
      for (let i = 0; i < newBewerberArray.length; i += pageSize) {
        const newbatchNum = Math.floor(i / pageSize) + batchNum;
        const batch = newBewerberArray.slice(i, i + pageSize);
        newBewerber[newbatchNum] = batch;
      }
      setBatchNum(batchNum + Math.ceil(newBewerberArray.length / pageSize));
      return newBewerber;
    });
  };

  const fetchNextBewerberBatch = () => {
    const newRequestParams = {
      ...requestParams,
      page: requestNumber + 1,
      size: requestSize,
    };
    setRequestNumber(requestNumber + 1);
    setRequestParams(newRequestParams);
    fetchData(newRequestParams).then((data) => {
      saveBewerberBatches(data.bewerber ? data.bewerber : [], batchNum);
    });
  };

  const handleSearchClick = () => {
    const newRequestParams = {
      ...searchParams,
      page: 1,
      size: requestSize,
    };
    setPageNumber(1);
    setBatchNum(1);
    setRequestParams(newRequestParams);
    setIsLoading(true);
    fetchData(newRequestParams).then((data) => {
      saveBewerberBatches(data.bewerber ? data.bewerber : [], 1);
      setNumResults(data.maxErgebnisse);
      setIsLoading(false);
    });
  };

  const handleChange = (event) => {
    setSearchParams({
      ...searchParams,
      [event.target.name]: event.target.value,
    });
  };

  const handleChangePage = async (event, newPage) => {
    setPageNumber(newPage + 1);
    if (newPage > batchNum - pageSize) {
      await fetchNextBewerberBatch();
    }
  };

  return (
    <Grid container spacing={2} justifyContent="center" alignItems={'center'}>
      <Grid container item xs={12} justifyContent="center" margin={2}>
        <BewerberForm params={searchParams} onChange={handleChange} />
      </Grid>
      <Grid container item xs={12} justifyContent="center" spacing={2}>
        <Tooltip title="Zurücksetzen">
          <Button
            variant="text"
            onClick={() => setSearchParams(defaultSearchParams)}
          >
            <RefreshIcon />
          </Button>
        </Tooltip>
        <Button variant="contained" color="primary" onClick={handleSearchClick}>
          Suchen
        </Button>
      </Grid>
      {isLoading ? (
        <Grid item xs={12}>
          <CircularProgress />
        </Grid>
      ) : bewerber ? (
        <>
          {numResults === 0 ? (
            <Grid item xs={12}>
              <p>Keine Einträge gefunden</p>
            </Grid>
          ) : (
            <></>
          )}
          <BewerberTable
            bewerber={bewerber[pageNumber] ? bewerber[pageNumber] : []}
            numResults={numResults}
            pageNumber={pageNumber}
            pageSize={pageSize}
            handleChangePage={handleChangePage}
          />
        </>
      ) : (
        <></>
      )}
    </Grid>
  );
}

export default BewerberComponent;
