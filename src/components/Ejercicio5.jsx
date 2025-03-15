import { useState } from "react";

function Ejercicio5 () {

    const [count, setCount] = useState (0)

    const incrementar = () => {
        if (count < 10) {
            setCount (count + 1);
        }
    };

    const decrementar = () => { 
        if (count > 0) {
            setCount (count - 1);
        }
    }

    return (
        <div>
            <p>Contador: {count}</p>
            <button onClick={incrementar}>
                Incrementar
            </button>
            <button onClick={decrementar}>
                Disminuir
            </button>
        </div>
    )

} 
export default Ejercicio5