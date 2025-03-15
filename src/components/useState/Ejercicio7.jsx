import { useState } from "react";

function Ejercicio7 () {

    const colores = ["red", "green", "blue", "yellow", "orange"];
    const [posicion, setPosicion] = useState (0);

    const cambiarColor = () => {
        setPosicion((posicion + 1) % colores.length);

    };

    return (

        <div style={{backgroundColor: colores[posicion], height: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }} >
            <button onClick={cambiarColor}>
                Cambiar Color
            </button>

        </div>
    );
            

}

export default Ejercicio7