import {useState, useEffect} from 'react';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins,setCoins] = useState([]);
  const [amount, setAmount] = useState(0);
  const [coinPrice, setCoinPrice] = useState(1);
  const onChange = (event) => {
      setAmount(event.target.value);
  }
  const onChangePrice = (event) => {
      reset();
      setCoinPrice(event.target.value);
  }
  const reset = () => setAmount(0);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then( (response) => response.json())
    .then( (json) => {
        setCoins(json);
        setLoading(false);
    });
  }, [])
  return (
    <div className="App">
        <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
        {loading ? <strong>Loading...</strong> :
        <div>
            <label htmlFor="usd">USD</label>
            <input
                id="usd"
                type="number"
                value={amount}
                onChange={onChange}
            />
            <label htmlFor="btc">Coin</label>
            <input
                id="btc"
                type="number"
                value={amount * coinPrice}
                disabled
            />
            <br/>
            <select onChange={onChangePrice}>
                <option value={1} >Select coin</option>
                {coins.map((coin) => 
                    <option key={coin.id} value={coin.quotes.USD.price}>{coin.name}</option>
                )}
            </select>
        </div>
        }
    </div>
  );
}

export default App;
