import React from 'react'
import './Coins.css'

const CoinItem = ({coin, key}) => {
  return (
    <div key={key} className='coin-row'>
        <p>{coin.market_cap_rank}</p>
        <div className='img-symbol'>
            <img src={coin.image} alt="/" />
            <p>{coin.symbol.toUpperCase()}</p>
        </div>
        <p>${coin.current_price.toLocaleString()}</p>
        <p>{coin.price_change_percentage_24h.toFixed(2)}%</p>
        <p className='mobile-hide'>${coin.total_volume.toLocaleString()}</p>
        <p className='mobile-hide'>${coin.market_cap.toLocaleString()}</p>
    </div>
  )
}

export default CoinItem