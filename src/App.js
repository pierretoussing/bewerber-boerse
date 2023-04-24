import BewerberComponent from './bewerber/BewerberComponent';
import Header from './header/Header';

function App() {
  return (
    <div>
      <Header />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          minHeight: '100vh',
        }}
      >
        <div style={{ margin: '2rem', textAlign: 'center' }}>
          <BewerberComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
