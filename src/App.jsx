import { useState } from 'react'
import './App.css'
import Contador from './components/Contador.jsx'
import Ejercicio1 from './components/Ejercicio1.jsx'
import Ejercicio2 from './components/Ejercicio2.jsx'
import Ejercicio3 from './components/Ejercicio3.jsx'
import Ejercicio4 from './components/Ejercicio4.jsx'
import Ejercicio5 from './components/Ejercicio5.jsx'
import Ejercicio6 from './components/Ejercicio6.jsx'
import Ejercico7 from './components/Ejercicio7.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Contador></Contador>
    <Ejercicio1></Ejercicio1>
    <Ejercicio2></Ejercicio2>
    <Ejercicio3></Ejercicio3>
    <Ejercicio4></Ejercicio4>
    <Ejercicio5></Ejercicio5>
    <Ejercicio6></Ejercicio6>
    <Ejercico7></Ejercico7>




    </>
  )
}

export default App
