import BewerberComponent from './bewerber/Bewerber';

function App() {
  return (
    <div>
    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'center'}}>
      <div style={{ margin: '2rem'}}>
        <h1>Arbeitsagentur Bewerberbörse</h1>
      </div>
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', minHeight: '100vh' }}>
      <div style={{ margin: '2rem', textAlign: 'center' }}>
        <BewerberComponent />
      </div>
    </div>
    </div>
  );
}


export default App;
