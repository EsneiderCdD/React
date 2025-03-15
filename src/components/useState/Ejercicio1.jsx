{/*Ejercicio 1: Contador con incremento personalizado
👉 Modifica el contador para que se pueda incrementar en un valor específico que el usuario ingrese en un input.

Pistas:
1️⃣ Usa useState para manejar tanto el contador como el valor de incremento.
2️⃣ Agrega un <input> para ingresar el número por el cual se incrementará el contador.
*/}
import { useState } from "react";

function  ContadorPersonalizado () {
    const [ value, setValue ] = useState (0); 
    const [ incremento, setIncremento ] = useState (0); 

    return ( 
        <div>
            <p> Contador : {value}</p>
            <button onClick={ () => setValue(value + incremento)}> Incrementar </button> 
            <input 
                type="number" 
                value={incremento}
                onChange={(e) => setIncremento(Number(e.target.value) || 0)} 
                placeholder="Ingresa un número"
            />
        </div>
    ); 
}

export default ContadorPersonalizado