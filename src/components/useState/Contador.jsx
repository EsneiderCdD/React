import { useState } from "react";

function Contador () {
    const [contar, setContar] = useState (0);

    return (
        <div>
            <p>Contador: {contar} </p>
            <button onClick={ () => setContar(contar + 1)}> Incrementar </button>
            <button onClick={ () => setContar(contar - 1)}> Decrementar </button>
        </div>
    );

}
export default Contador