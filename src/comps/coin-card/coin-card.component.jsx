import { useState } from 'react';

import lowAlert from '../../assets/low_alert.wav';
import highAlert from '../../assets/high_alert.wav';

/* import data from '../../bitcoin.json'; */
import btc_image from '../../assets/btc.png'
import '../coin-card/coin-card.styles.scss';

const CoinCard = () => {

    const [price, setPrice] = useState([])
    const [currentPrice, setCurrentPrice] = useState(0);
    const [highPrice, setHighPrice] = useState(0);
    const [lowPrice, setLowPrice] = useState(0);
    const [lowAlertValue, setLowAlertValue] = useState(0);
    const [highAlertValue, setHighAlertValue] = useState(0);

    const fetchData = () => {
        fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
          .then(response => {
            return response.json()
          })
          .then(data => {
            setPrice(data)
            setCurrentPrice(data.market_data.current_price.usd)
            setHighAlertValue(data.market_data.high_24h.usd)
            setHighPrice(data.market_data.high_24h.usd)
            setLowAlertValue(data.market_data.low_24h.usd)
            setLowPrice(data.market_data.low_24h.usd)
          })
        }

    // DEMO FUNCTIONS ONLY FOR MVP
    function priceDropper() {
        setCurrentPrice(currentPrice - 1000);
    }

    function raisePrice() {
        setCurrentPrice(currentPrice + 1000);
    }

    const lowAlertSound = new Audio(lowAlert);
    const highAlertSound = new Audio(highAlert);

    const priceCheckFunction = () => {
        if (currentPrice < lowAlertValue) {
            lowAlertSound.play()
        } else if (currentPrice > highAlertValue) {
            highAlertSound.play()
        } else {
            return;
        }
    }
    priceCheckFunction();

        return(
            <div>
                <button onClick={priceDropper}>Price Dropper Test</button>
                <button onClick={fetchData}>Refresh Data</button>
                <button onClick={raisePrice}>Raise Price Test</button>
                <div className='coin_container'>
                    <div className='coin_name_container'>
                        <img src={btc_image} alt='bitcoin logo' />
                        <h1>Bitcoin</h1>
                    </div>
                    
                    <div className='price_container'>
                        <div className='price_box' id='high_num'>
                            <p>24 Hour High:</p>
                            <p>${highPrice.toFixed(2)}</p>
                        </div>

                        <div className='price_box'>
                            <p>Current Price:</p>
                            <p>${currentPrice.toFixed(2)}</p>
                        </div>

                        <div className='price_box' id='low_num'>
                            <p className='24_low'>24 Hour Low:</p>
                            <p>${lowPrice.toFixed(2)}</p>
                        </div>
                           
                    </div>

                </div>

                <div className='alerts_box'>
                    <h4>Current Alerts</h4>
                    <p>24 Hour Highs and Lows are used for default alert values.</p>
                    <div className='alerts_flex'>
                        <h6>Low Alert: ${lowAlertValue}</h6>
                        <h6>High Alert: ${highAlertValue}</h6>
                    </div>
                    
                    
                    <div className='input_container'>
                        <form className='input_flex' id='low_alert'>
                            <label>Low Alert</label>
                            <input
                                type='number'
                                pattern="[0-9]*"
                                onChange={(event) => {setLowAlertValue(event.target.value)}}
                                placeholder='Low Price Target'
                            ></input>
                        </form>
                        
                        <form className='input_flex' id='high_alert'>
                            <label>High Alert</label>
                            <input
                                type='number'
                                pattern="[0-9]*"
                                onChange={(event) => {setHighAlertValue(event.target.value)}}
                                placeholder='High Price Target'
                            ></input>
                        </form>

                    </div> 
                </div>

            </div>
        )
    }

export default CoinCard;


