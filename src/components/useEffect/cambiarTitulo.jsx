import { useState, useEffect } from "react";

function CambiarTitulo() {
  const [texto, setTexto] = useState("");

  useEffect(() => {
    document.title = texto ? texto : "React App";
  }, [texto]);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Escribe algo para cambiar el título</h2>
      <input 
        type="text" 
        value={texto} 
        onChange={(e) => setTexto(e.target.value)} 
        placeholder="Escribe algo..."
      />
    </div>
  );
}

export default CambiarTitulo;
