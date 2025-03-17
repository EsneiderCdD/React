import { useState, useEffect } from "react";

function SimulacionCarga () {

    const [mensaje, setMensaje] = useState ("Cargando...")

    useEffect (() => {
        const timer = setTimeout (() => {
            setMensaje("¡Carga Completa!")
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div style={{textAlign: "center", marginTop: "50px"}}>
            <h2>{mensaje}</h2>
            

        </div>
    );
}
export default SimulacionCarga 