import { useState } from 'react';

import '../alerts-box/alerts-box.styles.scss';

const AlertsBox = (props) => {

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
        props.checkPrice()
        // console.log(alertValues)
        setAlertValues({low:'', high: ''}) // clears input field
    }

    return(
        <div className='alerts_box'>

            <h4>Alerts</h4>
            <p>Current price is updated every 30 seconds.</p>
            
            <div className='alerts_flex'>
                <h6>Low Alert: ${props.lowAlert}</h6> 
                <h6>High Alert: ${props.highAlert}</h6>
            </div>

            <div className='input_container'>

                <form onSubmit={handleSubmit} className='input_flex' id='alerts_form'>
                    <label className='form_alerts'>Low Alert: ${props.lowAlert}</label>
                    <input
                        name='low'
                        type='number'
                        pattern="[0-9]*"
                        onChange={handleChange}
                        placeholder='Low Price Target'
                        value={alertValues.low}
                    ></input>
                     
                    <label className='form_alerts'>High Alert: ${props.highAlert}</label>
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