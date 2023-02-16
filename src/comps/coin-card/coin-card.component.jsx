import { useState } from 'react';
import lowAlert from '../../assets/low_alert.wav';

import data from '../../bitcoin.json';
import btc_image from '../../assets/btc.png'
import '../coin-card/coin-card.styles.scss';

const CoinCard = () => {

    const [lowAlertValue, setLowAlertValue] = useState()
    const [highAlertValue, setHighAlertValue] = useState()


    function playLowAlert() {
        new Audio(lowAlert).play()
    }

/*     const [price, setPrice] = useState([]) */

/*     const fetchData = () => {
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
          .then(response => {
            return response.json()
          })
          .then(data => {
            setPrice(data)
          })
      } 

      fetchData(); */

        return(
            <div>
                <div className='coin_container'>
                    <div className='coin_name_container'>
                        <img src={btc_image} alt='bitcoin logo' />
                        <h1>{data.name}</h1>
                    </div>
                    
                    <div className='price_container'>
                        <div className='price_box' id='high_num'>
                            <p>24 Hour High:</p>
                            <p>${data.market_data.high_24h.usd.toFixed(2)}</p>
                        </div>

                        <div className='price_box'>
                            <p>Current Price:</p>
                            <p>${data.market_data.current_price.usd.toFixed(2)}</p>
                        </div>

                        <div className='price_box' id='low_num'>
                            <p className='24_low'>24 Hour Low:</p>
                            <p>${data.market_data.low_24h.usd.toFixed(2)}</p>
                        </div>
                        
                        
                        
                    </div>
        
                    
                    {/* {
                        price.map((item) => {
                            return <div>
                                <h2>{item.name}</h2>
                                <p>{item.current_price}</p>
                                <p>{item.high_24h}</p>
                                <p></p>
                            </div>
                        })
                        } */}
                </div>

                <div className='alerts_box'>
                    <h2>Alerts</h2>
                    
                    <div className='input_container'>
                        <div className='input_flex' id='low_alert'>
                            <label>Low Alert</label>
                            <input placeholder='Low Price Target'></input>
                            <button onClick={playLowAlert}>Set Alert</button>
                        </div>
                        
                        <div className='input_flex' id='high_alert'>
                            <label>High Alert</label>
                            <input placeholder='High Price Target'></input>
                            <button>Set Alert</button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

export default CoinCard;
