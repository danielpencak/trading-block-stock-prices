import React, { useEffect, useState } from 'react';

import './App.css';

function App() {
  const generateRandomValue = (min: number, max: number): number => {
    return Math.random() * (max - min) + min;
  }

  const MS_MIN = 80;
  const MS_MAX = 100;
  const AAPL_MIN = 170;
  const AAPL_MAX = 220;
  const AMZN_MIN = 120;
  const AMZN_MAX = 180;
  const MS_SYMBOL = 'MS';
  const AAPL_SYMBOL = 'AAPL';
  const AMZN_SYMBOL = 'AMZN';
  
  const [msStockPice, setMsStockPrice] = useState<number>(generateRandomValue(MS_MIN, MS_MAX));
  const [aaplStockPrice, setAaplStockPrice] = useState<number>(generateRandomValue(AAPL_MIN, AAPL_MAX));
  const [amznStockPrice, setAmznStockPrice] = useState<number>(generateRandomValue(AMZN_MIN, AMZN_MAX));
  const [ticker, setTicker] = useState<number>(0);
  
  const generateStockPrice = (
    min: number,
    max: number,
    stockSymbol: string
  ): number => {
    let minForCalc = min;
    let maxForCalc = max;
    let currentPrice = 0;

    if (stockSymbol === MS_SYMBOL) {
      currentPrice = msStockPice;
    } else if (stockSymbol === AAPL_SYMBOL) {
      currentPrice = aaplStockPrice;
    } else if (stockSymbol === AMZN_SYMBOL) {
      currentPrice = amznStockPrice;
    }

    const randomNum = Math.random();

    if (currentPrice + randomNum < max) {
      maxForCalc = currentPrice + randomNum;
    }

    if (currentPrice - randomNum > min) {
      minForCalc = currentPrice - randomNum;
    }

    return Math.random() * (maxForCalc - minForCalc) + minForCalc;
  }

  useEffect(() => {
    const interval = setInterval(() => setTicker(Math.random()), 1000);

    return () => {
      clearInterval(interval);
    }
  }, []);

  useEffect(() => {
    setMsStockPrice(generateStockPrice(MS_MIN, MS_MAX, MS_SYMBOL));
    setAaplStockPrice(generateStockPrice(AAPL_MIN, AAPL_MAX, AAPL_SYMBOL));
    setAmznStockPrice(generateStockPrice(AMZN_MIN, AMZN_MAX, AMZN_SYMBOL));
  }, [ticker])

  return (
    <div className="App">
      <header><h1>Stock Prices</h1></header>
      <main>
        <div className="stock-container">
          <div className="stock">
            <span className="stock-name-container">
              <span className="stock-name">Morgan Stanley</span>
              <span className="stock-symbol">{MS_SYMBOL}</span>
            </span>
            <span className="stock-price">{msStockPice.toFixed(2)}</span>
          </div>

          <div className="stock">
            <span className="stock-name-container">
              <span className="stock-name">Apple</span>
              <span className="stock-symbol">{AAPL_SYMBOL}</span>
            </span>
            <span className="stock-price">{aaplStockPrice.toFixed(2)}</span>
          </div>

          <div className="stock">
            <span className="stock-name-container">
              <span className="stock-name">Amazon</span>
              <span className="stock-symbol">{AMZN_SYMBOL}</span>
            </span>
            <span className="stock-price">{amznStockPrice.toFixed(2)}</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
