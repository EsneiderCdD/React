import { useState } from "react";

function Ejercicio6 () { 
    const [buttonNumber, setButtonNumber] = useState (null);

    return ( 
        <div>
            <button onClick={() => setButtonNumber (1) } >1</button>
            <button onClick={() => setButtonNumber (2) } >2</button>
            <button onClick={() => setButtonNumber (3) } >3</button>
            <button onClick={() => setButtonNumber (4) } >4</button>
            <button onClick={() => setButtonNumber (5) } >5</button>

            <p>El ultimo boton presionado : { buttonNumber !== null ? buttonNumber : "ninguno" } </p>
        </div>
    )
}
export default Ejercicio6