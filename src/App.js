import './App.css';

import CoinCard from './comps/coin-card/coin-card.component';
import AlertsBox from './comps/alerts-box/alerts-box.component';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Gilfoyles Bitcoin Alarm</h1>
        <p id='demo_version'>Working Demo</p>
        <CoinCard />
        <AlertsBox />
      </header>
    </div>
  );
}

export default App;
