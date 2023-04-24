import React from 'react';
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';

function BewerberDetailsModule(props) {
  const { data, open, handleClose } = props;

  const translations = {
    refnr: 'Referenznummer',
    verfuegbarkeitVon: 'Verfügbarkeit von',
    aktualisierungsdatum: 'Aktualisierungsdatum',
    veroeffentlichungsdatum: 'Veröffentlichungsdatum',
    stellenart: 'Stellenart',
    arbeitszeitModelle: 'Arbeitszeitmodelle',
    berufe: 'Berufe',
    ausbildungen: 'Ausbildungen',
    art: 'Art',
    gesamterfahrung: 'Gesamterfahrung',
    berufsfeld: 'Berufsfeld',
    erfahrung: 'Erfahrung',
    bezeichnung: 'Bezeichnung',
    jahr: 'Jahr',
    aktuell: 'Aktuell',
    hatEmail: 'Hat Email',
    hatTelefon: 'Hat Telefon',
    hatAdresse: 'Hat Adresse',
    lokation: 'Lokation',
    ort: 'Ort',
    plz: 'PLZ',
    umkreis: 'Umkreis',
    region: 'Region',
    land: 'Land',
    mehrereArbeitsorte: 'Mehrere Arbeitsorte',
    berufsfeldErfahrung: 'Berufsfelderfahrung',
    expertenKenntnisse: 'Expertenkenntisse',
    letzteTaetigkeit: 'Letzte Tätigkeit',
    entfernungGrob: 'Entfernung Grob',
  };

  const KeyValue = ({ translations, label, value }) => (
    <p>
      <strong>{translations[label]}:</strong> {value}
    </p>
  );

  const List = ({ translations, label, items }) => (
    <div>
      <p>
        <strong>{translations[label]}:</strong>
      </p>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );

  const InnerObject = ({ translations, obj }) => (
    <div>
      {Object.entries(obj).map(([innerKey, innerValue]) => (
        <KeyValue
          key={innerKey}
          translations={translations}
          label={innerKey}
          value={innerValue}
        />
      ))}
    </div>
  );

  const Experience = ({ translations, value }) => (
    <div>
      <ul>
        <KeyValue
          translations={translations}
          label="gesamterfahrung"
          value={value.gesamterfahrung}
        />
        {value.berufsfeldErfahrung ? (
          value.berufsfeldErfahrung.map((berufsfeld, index) => (
            <div key={index}>
              <p>
                <strong>{translations['berufsfeld']}:</strong>{' '}
                {berufsfeld.berufsfeld}
              </p>
              <p>
                <strong>{translations['erfahrung']}:</strong>{' '}
                {berufsfeld.erfahrung}
              </p>
            </div>
          ))
        ) : (
          <></>
        )}
      </ul>
    </div>
  );

  const Location = ({ translations, value }) => (
    <div>
      <p>
        <strong>{translations['lokation']}:</strong>
      </p>
      <ul>
        {Object.entries(value).map(([innerKey, innerValue]) => (
          <KeyValue
            key={innerKey}
            translations={translations}
            label={innerKey}
            value={innerValue}
          />
        ))}
      </ul>
    </div>
  );

  const BooleanValue = ({ translations, value }) => (
    <p>{value ? 'Ja' : 'Nein'}</p>
  );

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Details</DialogTitle>
      <DialogContent>
        <div>
          {Object.entries(data).map(([key, value]) => (
            <React.Fragment key={key}>
              {Array.isArray(value) ? (
                <List
                  translations={translations}
                  label={key}
                  items={value.map((item) =>
                    typeof item === 'object' ? (
                      <InnerObject
                        translations={translations}
                        obj={item}
                        key={item.art}
                      />
                    ) : (
                      item.toString()
                    )
                  )}
                />
              ) : typeof value === 'object' ? (
                key === 'erfahrung' ? (
                  <Experience translations={translations} value={value} />
                ) : key === 'lokation' ? (
                  <Location translations={translations} value={value} />
                ) : (
                  <InnerObject translations={translations} obj={value} />
                )
              ) : (
                <KeyValue
                  translations={translations}
                  label={key}
                  value={
                    value === true || value === false ? (
                      <BooleanValue translations={translations} value={value} />
                    ) : (
                      value.toString()
                    )
                  }
                />
              )}
              <hr></hr>
            </React.Fragment>
          ))}
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

export default BewerberDetailsModule;
