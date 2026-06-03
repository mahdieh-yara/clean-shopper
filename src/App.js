import NavBar from './components/NavBar';
import BrowsePage from './features/browse/BrowsePage';

function App() {
  return (
    <div className="min-h-screen bg-surface-page">
      <NavBar
        activeView="search"
        cartCount={2}
        onNavigate={(view) => console.log('Navigate:', view)}
      />
      <BrowsePage />
    </div>
  );
}

export default App;
