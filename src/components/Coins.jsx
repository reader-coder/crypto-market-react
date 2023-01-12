import React from 'react'
import CoinItem from './CoinItem'
import './Coins.css'
import { Link } from 'react-router-dom'
import Coin from '../routes/Coin'

const Coins = ({coins}) => {
  return (
    <div className='container'>
        <div>
            <div className='heading'>
                <p>#</p>
                <p className='coin-name'>Coin</p>
                <p>Price</p>
                <p>24h</p>
                <p className='hide-mobile'>Volume</p>
                <p className='hide-mobile'>Market Cap</p>
            </div>
            {
                coins?.map((coin,index)=> {
                    return (
                        <Link to={`/coin/${coin.id}`} element={<Coin/>} key={index}>
                        <CoinItem coin={coin}/>
                        </Link>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Coins