import { useState } from 'react';

import lowAlert from '../../assets/low_alert.wav';
import highAlert from '../../assets/high_alert.wav';

import '../alerts-box/alerts-box.styles.scss';

const AlertsBox = (props) => {

    const lowAlertSound = new Audio(lowAlert);
    const highAlertSound = new Audio(highAlert);

    // This needs to be updated to use props from App
    const priceCheckFunction = () => {
        if (props.currentPrice < props.lowAlert) {
            lowAlertSound.play()
        } else if (props.currentPrice > props.highAlert) {
            highAlertSound.play()
        } else {
            return;
        }
    }
    priceCheckFunction();


    // THIS BLOCK OF CODE IS WORKING FOR DEMO FORM
    const [alertValues, setAlertValues] = useState({
        low: '',
        high: ''
    })

    const handleChange = (event) => {
        setAlertValues({...alertValues, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault(); // prevents the submit button from refreshing the page
        props.alertData(alertValues)
        // console.log(alertValues)
        setAlertValues({low:'', high: ''}) // clears input field
    }

    return(
        <div className='alerts_box'>

            <h4>Alerts</h4>
            <p>Current price is updated every 60 seconds.</p>
            
            <div className='alerts_flex'>
                
                <h6>Low Alert: ${props.lowAlert}</h6> 
                <h6>High Alert: ${props.highAlert}</h6>
            </div>

            <div className='input_container'>

                <form onSubmit={handleSubmit} className='input_flex' id='alerts_form'>
                    <input
                        name='low'
                        type='number'
                        pattern="[0-9]*"
                        onChange={handleChange}
                        placeholder='Low Price Target'
                        value={alertValues.low}
                    ></input>

                    <input
                        name='high'
                        type='number'
                        pattern="[0-9]*"
                        onChange={handleChange}
                        placeholder='High Price Target'
                        value={alertValues.high}
                    ></input>
                    <button>Set Alerts</button>
                </form>
            </div> 
        </div>
    )
}

export default AlertsBox;