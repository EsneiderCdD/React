import { useState } from "react";

const Ejercicio2 = () => {


    const [nombres, setNombres] = useState (["Ana", "Pedro", "María", "Juan", "Esneider"]);

    const [busqueda, setBusqueda] = useState ("")

    const nombresFiltrados = nombres.filter((nombre) => nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <div>
            <h2> Buscacador de Nombres</h2>
            <input type="text"
                placeholder="Buscar un nombre..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
            />
            


            <ul>
                {nombresFiltrados.map((nombre, index) => (
                    <li key={index}>{nombre}</li>
                ))}
            </ul>
        </div>
    )

}
export default Ejercicio2