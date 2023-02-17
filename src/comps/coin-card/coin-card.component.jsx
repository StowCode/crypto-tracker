import { useEffect, useState } from 'react';

import btc_image from '../../assets/btc.png'
import '../coin-card/coin-card.styles.scss';
import BitLogo from '../bitcoin-logo/bitcoin-logo.component';

const CoinCard = () => {
    const [currentPrice, setCurrentPrice] = useState(0);
    const [highPrice, setHighPrice] = useState(0);
    const [lowPrice, setLowPrice] = useState(0);

    // UseEffect runs after every render
    useEffect(() => {
        fetch("https://api.coingecko.com/api/v3/coins/bitcoin")
          .then(response => {
            return response.json()
          })
          .then(data => {
            setCurrentPrice(data.market_data.current_price.usd)
            setHighPrice(data.market_data.high_24h.usd)
            setLowPrice(data.market_data.low_24h.usd)
          })
        }
    )

    // DEMO FUNCTIONS ONLY FOR MVP
    // Doesn't work with useEffect active
/*     function priceDropper() {
        setCurrentPrice(currentPrice - 1000);
    }

    function raisePrice() {
        setCurrentPrice(currentPrice + 1000);
    } */



        return(
            <div>
{/*                 <button onClick={priceDropper}>Price Dropper Test</button>
                <button onClick={fetchData}>Refresh Data</button>
                <button onClick={raisePrice}>Raise Price Test</button> */}
                <div className='coin_container'>
                    <div className='coin_name_container'>
                        <BitLogo />
{/*                         <img 
                            data-tilt
                            data-tilt-max='50'
                            data-tilt-speed='400'
                            data-tilt-perspective='500'
                            src={btc_image} 
                            alt='bitcoin logo' 
                        /> */}
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

            </div>
        )
    }

export default CoinCard;


