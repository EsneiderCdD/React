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
        </div>
    );
}
export default AlternarOnOff

