import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Coins from './components/Coins';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Coin from './routes/Coin';

function App() {

  const [coins, setCoins] = useState([])

  useEffect(()=>{
   axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`)
   .then(res=>{setCoins(res.data)})
   .catch(err=>console.log(err.message)) 
  })

  console.log(coins)

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Coins coins={coins}/>}/>
      <Route path='/coin' element={<Coin/>}>
        <Route path=':coinId' element={<Coin/>}/>
      </Route>
    </Routes>
    </>
  );
}

export default App;
