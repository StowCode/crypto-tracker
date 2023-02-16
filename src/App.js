import './App.css';

import CoinCard from './comps/coin-card/coin-card.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Gilfoyles Bitcoin Alarm</h1>
        <p id='demo_version'>Demo Version</p>
        <CoinCard />
      </header>
    </div>
  );
}

export default App;
