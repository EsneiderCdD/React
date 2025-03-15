import { useState } from "react"

function Ejercicio4 () { 
    const [visible, setVisible] = useState (false);

    return (
        <div>
            <button onClick = {() => setVisible(!visible)}>
                Mostrar/Ocultar
            </button>
            {visible && <p>Contenido visible</p>}
        </div>
    )
}

export default Ejercicio4 