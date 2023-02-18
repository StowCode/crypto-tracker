import { Component } from 'react';
import './App.css';

import CoinCardClass from './comps/coin-card-class/coin-card-class.component';
import CoinCard from './comps/coin-card/coin-card.component';
import AlertsBox from './comps/alerts-box/alerts-box.component';
import Footer from './comps/Footer/footer.component';

import lowAlertFile from './assets/low_alert.wav';
import highAlertFile from './assets/high_alert.wav';

class App extends Component {
  constructor() {
    super();

    this.state = {
      bitcoinData: [],
      alertData: []
    }

  }

  componentDidMount() {
    fetch('https://api.coingecko.com/api/v3/coins/bitcoin')
    .then(response => response.json())
    .then((data) => this.setState(() => {
      return {bitcoinData: data}
    }))
    .then(setInterval(() => {
      this.fetchData()
    }, 30000))
  }

  
  fetchData() {
    fetch('https://api.coingecko.com/api/v3/coins/bitcoin')
    .then(response => response.json())
    .then((data) => this.setState(() => {
      return {bitcoinData: data}
    }))
  }


  render() {
    const { bitcoinData, alertData } = this.state; //Destructured for brevity

    const priceCheckFunction = () => {
      const lowAlertSound = new Audio(lowAlertFile);
      const highAlertSound = new Audio(highAlertFile);
  
      if (bitcoinData.market_data?.current_price.usd < alertData.low) {
          lowAlertSound.play()
      } else if (bitcoinData.market_data?.current_price.usd > alertData.high) {
          highAlertSound.play()
      } else {
          return;
      }
    }
    priceCheckFunction()
    
    const updateAlerts = (value) => {
      this.setState({alertData: value})
    }

    
    return (
      <div className="App">
        <header className="App-header">
          <h1>Gilfoyles Bitcoin Alarm</h1>
          <p id='demo_version'>Using CoinGecko's API, this app gets the current price, 24 hour high, and 24 hour low of Bitcoin.<br></br>You can set custom price alarms in the Alerts box.
          <br></br>
          <br></br>
          Inspired by Gilfoyles Bitcoin Alarm in 'Silicon Valley'.
          </p>

          <CoinCardClass data={bitcoinData}/>
          <AlertsBox
            checkPrice={priceCheckFunction}
            alertDisplay={alertData.name}
            lowAlert={alertData.low}
            highAlert={alertData.high}
            alertData={updateAlerts} 
            lowAlertValue={0}
            highAlertValue={100000}
            currentPrice={bitcoinData.market_data?.current_price.usd}
            />
          <Footer />
        </header>
      </div>
    );
  }

}

export default App;
