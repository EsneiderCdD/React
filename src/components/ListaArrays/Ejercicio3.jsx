import {useState} from "react";

function FiltroDeProductos() {

    const productos = [
        { id: 1, nombre: "Laptop", categoria: "Tecnología" },
    { id: 2, nombre: "Celular", categoria: "Tecnología" },
    { id: 3, nombre: "Camiseta", categoria: "Ropa" },
    { id: 4, nombre: "Zapatillas", categoria: "Ropa" },
    { id: 5, nombre: "Cafetera", categoria: "Electrodomésticos" }
    ];

    const [filtro, setFiltro] = useState("todos");

    const productosFiltrados = filtro === "todos" ? productos : productos.filter((producto) => producto.categoria === filtro);

    return (
        <div>
            <h2>Filtrar Productos</h2>
            <select value={filtro} onChange={(e) => setFiltro(e.target.value) } >
                <option value= "todos"> Todos </option>
                <option value= "Tecnología"> Tecnología </option>
                <option value= "Ropa"> Ropa </option>
                <option value= "Electrodomésticos"> Electrodomésticos </option>
            </select>

            <ul>
                {productosFiltrados.map((producto) => (
                    <li key={producto.id}>{producto.nombre} - {producto.categoria}

                    </li>
                ))}
            </ul>


        </div>
    )
    
}

export default  FiltroDeProductos
