import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [side, setSide] = useState(1)
  const [heads, setHeads] = useState(0)
  const [tails, setTails] = useState(0)

  let tossed = heads + tails
  
  function tossCoin(){
    let landedOn = Math.floor(Math.random() * 2)
    if(landedOn === 1)  setHeads(heads + 1)
    else if (landedOn === 0)  setTails(tails + 1)
    setSide(landedOn)
  }

  return (
    <div className="App">
      <div>
        <p>The coin has been tossed {tossed} times.</p>
        <p>It landed on {side === 1 ? "heads" : "tails"}</p>

        <ul className="coin-list">
          <li>
            <label htmlFor="heads">Heads: {heads}</label>
            <meter id="heads" value={heads} max={tossed} />
          </li>
          <li>
            <label htmlFor='tails'>Tails: {tails}</label>
            <meter id="tails" value={tails} max={tossed} />
          </li>
        </ul>

        <button onClick={tossCoin}>Toss Coin</button>
      </div>
    </div>
  )
}

export default App
