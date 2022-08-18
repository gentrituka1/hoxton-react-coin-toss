import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [side, setSide] = useState(1)
  const [heads, setHeads] = useState(0)
  const [tails, setTails] = useState(0)
  const [isPaused,]

  let tossed = heads + tails
  
  function tossCoin(){
    let landedOn = Math.floor(Math.random())
    if(landedOn === 1)  setHeads(landedOn)
    else  setTails(tails + 1)
    setSide(landedOn)
  }

  useEffect(() => {
    const interval = setInterval(tossCoin, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="App">
      <div>
        <p>The coin has been tossed {tossed} times.</p>
        <p>It landed on {side === 1 ? "heads" : "tails"}</p>

        <ul>
          <li>Heads: {heads}</li>
          <li>Tails: {tails}</li>
        </ul>

        <button onClick={tossCoin}>Toss coin</button>
      </div>
    </div>
  )
}

export default App
