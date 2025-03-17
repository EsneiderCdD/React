import './App.css'
import Formulario from './components/Formularios/Formulario'
import SimulacionCarga from './components/EfectosAsincronia/SimulacionCarga'
import FetchPost from './components/APIs/FetchPost'
function App() {
 

  return (
    <>

    <Formulario />
    <SimulacionCarga></SimulacionCarga>
    <FetchPost></FetchPost>




    </>
  )
}

export default App
