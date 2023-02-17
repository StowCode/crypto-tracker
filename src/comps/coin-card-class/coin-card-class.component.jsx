import { Component } from 'react';

import btc_image from '../../assets/btc.png'
import '../coin-card/coin-card.styles.scss';
import BitLogo from '../bitcoin-logo/bitcoin-logo.component';

class CoinCardClass extends Component {

      render() {
        const { data } = this.props;

        return(
            <div>
                <div className='coin_container'>
                    <div className='coin_name_container'>
                        <BitLogo />
                        <h1>{data.name}</h1>
                    </div>
                    
                    <div className='price_container'>
                        <div className='price_box' id='high_num'>
                            <p>24 Hour High:</p>
                            <p>${data.market_data?.high_24h.usd.toFixed(2)}</p>
                        </div>

                        <div className='price_box'>
                            <p>Current Price:</p>
                            <p>${data.market_data?.current_price.usd.toFixed(2)}</p>
                        </div>

                        <div className='price_box' id='low_num'>
                            <p className='24_low'>24 Hour Low:</p>
                            <p>${data.market_data?.low_24h.usd.toFixed(2)}</p> 
                        </div>
                    </div>
                </div>
            </div>
            )
      }
    }

export default CoinCardClass;


