import { useState, useEffect } from "react";

function DetectarTamañoVentana () {

    const [tamaño, setTamaño] = useState({ancho: window.innerWidth, alto: window.innerHeight});


    useEffect(() => {
        const actualizarTamaño = () => {
            setTamaño({
                ancho: window.innerWidth,
                alto: window.innerHeight
            });
        };

        window.addEventListener("resize", actualizarTamaño);

        return () => {
            window.removeEventListener("resize", actualizarTamaño);
        };
    }, []);

    
    

    return (
        <div>
            <h2>Tamaño de la ventana</h2>
            <p>Ancho: {tamaño.ancho}px </p>
            <p>Alto: {tamaño.alto}px </p>

        </div>
    )

}
export default DetectarTamañoVentana