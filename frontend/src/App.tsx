import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Master from './master/Master'
import Slave from './slave/Slave'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Master />
      <Slave />
    </>
  )
}

export default App
