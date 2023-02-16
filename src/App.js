import './App.css';

import CoinCard from './comps/coin-card/coin-card.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bitcoin Alarm</h1>
        <CoinCard />
      </header>
    </div>
  );
}

export default App;
