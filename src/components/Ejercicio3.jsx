import { useState } from "react";

function Ejercicio3 () {
    const [count, setCount] = useState (0);

    return (
        <div>
            <p>Contador: {count} </p>
            <button onClick={() => setCount(count + 1 ) }>Incrementar</button>
            <button onClick={() => setCount(count - 1 ) }>Decrementar</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );


}

export default Ejercicio3
