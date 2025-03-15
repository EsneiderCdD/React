{/*Ejercicio 2: Alternar On/Off
Ejercicio 2: Alternar entre dos valores (ON/OFF)
👉 Crea un botón que alterne entre "ON" y "OFF" cuando se haga clic.

Pistas:
1️⃣ Usa useState para manejar un estado de tipo string.
2️⃣ En el onClick, cambia el valor entre "ON" y "OFF".
*/}
import { useState } from "react";

function AlternarOnOff () { 
    const [estado, setEstado] = useState("OFF");

    return ( 
        <div>
            <p>Estado: {estado} </p>
            <button 
                 onClick={() => setEstado (estado === "OFF" ? "ON" : "OFF" ) } 
                 style={{
                 backgroundColor: estado === "OFF" ? "red" : "green",
                 color: "white",
                 padding: "10px 20px",
                 fontSize: "16px",
                 border: "note",
                 borderRadius: "5px",
                 cursor: "pointer",
                }}
                >
            
           
            
            Alternar </button>
        </div>
    );
}
export default AlternarOnOff

