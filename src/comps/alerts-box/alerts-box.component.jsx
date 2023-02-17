import { useState } from 'react';

import lowAlert from '../../assets/low_alert.wav';
import highAlert from '../../assets/high_alert.wav';

import '../alerts-box/alerts-box.styles.scss';

const AlertsBox = (props) => {

    const [lowAlertValue, setLowAlertValue] = useState(props.lowAlertValue);
    const [highAlertValue, setHighAlertValue] = useState(props.highAlertValue);

    const lowAlertSound = new Audio(lowAlert);
    const highAlertSound = new Audio(highAlert);

    const priceCheckFunction = () => {
        if (props.currentPrice < lowAlertValue) {
            lowAlertSound.play()
        } else if (props.currentPrice > highAlertValue) {
            highAlertSound.play()
        } else {
            return;
        }
    }
    priceCheckFunction();

    return(
        <div className='alerts_box'>
            <h4>Alerts</h4>
            
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
    )
}

export default AlertsBox;