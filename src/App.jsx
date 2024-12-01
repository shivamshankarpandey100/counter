import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  const add=()=>{
    if(counter<20){
      setCounter(counter+1)
    }
  }
  const rem=()=>{
    if(counter>0){
      setCounter(counter-1)
    }
  }

  return (
    <>
      <h1>This is the Use of useState And Making the Counter {counter}</h1>
      <button onClick={add}>Add {counter}</button>
      <br />
      <br />
      <button onClick={rem}>Del {counter}</button>
    </>
  )
}

export default App
