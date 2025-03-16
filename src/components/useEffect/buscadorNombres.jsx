import { useState } from "react";

function BuscadorNombres() {
  const [busqueda, setBusqueda] = useState("");
  
  const nombres = ["Ana", "Pedro", "Juan", "María", "Carlos", "Lucía", "Miguel"];

  const nombresFiltrados = nombres.filter((nombre) =>
    nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Buscador de Nombres</h2>
      <input 
        type="text" 
        value={busqueda} 
        onChange={(e) => setBusqueda(e.target.value)} 
        placeholder="Escribe un nombre..."
      />
      <ul>
        {nombresFiltrados.map((nombre, index) => (
          <li key={index}>{nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default BuscadorNombres;
