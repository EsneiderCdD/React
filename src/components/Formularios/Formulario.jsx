import { useState } from "react";
function Formulario() {

    const [texto, setTexto] = useState ("");
    return (
        <div>
            <h2>
                Formulario Controlado
            </h2>
            <input type="text" 
                value={texto}
                onChange={(e) => setTexto(e.target.value)}
            />
            <p>texto ingresado: {texto}</p>
        </div>
    )
} 
export default Formulario