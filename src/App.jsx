import { useState } from 'react'
import './App.css'
import Contador from './components/Contador.jsx'
import Ejercicio1 from './components/Ejercicio1.jsx'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Contador></Contador>
    <Ejercicio1></Ejercicio1>

    </>
  )
}

export default App
