import { useEffect, useState } from 'react';

const CoinCard = () => {

    const [price, setPrice] = useState([])

    const fetchData = () => {
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
          .then(response => {
            return response.json()
          })
          .then(data => {
            setPrice(data)
          })
      }

      // fetchData();


        return(
            <div>
                <h2>{
                    price.map((item) => {
                        return <div>
                            <h2>{item.name}</h2>
                            <p>{item.current_price}</p>
                            <p>{item.high_24h}</p>
                            <p></p>
                        </div>
                        
                        
                    })
                    }</h2>
            </div>
        )
    }

export default CoinCard;
