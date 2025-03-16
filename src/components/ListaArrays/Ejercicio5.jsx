import { useState } from "react";

function OrdenarLista() {
  const [productos, setProductos] = useState([
    { id: 1, nombre: "Laptop", precio: 1000 },
    { id: 2, nombre: "Celular", precio: 500 },
    { id: 3, nombre: "Tablet", precio: 300 },
    { id: 4, nombre: "Monitor", precio: 200 },
  ]);

  const ordenarPorNombre = () => {
    const productosOrdenados = [...productos].sort((a, b) => a.nombre.localeCompare(b.nombre));
    setProductos(productosOrdenados);
  };

  const ordenarPorPrecioAsc = () => {
    const productosOrdenados = [...productos].sort((a, b) => a.precio - b.precio);
    setProductos(productosOrdenados);
  };

  const ordenarPorPrecioDesc = () => {
    const productosOrdenados = [...productos].sort((a, b) => b.precio - a.precio);
    setProductos(productosOrdenados);
  };

  return (
    <div>
      <h2>Lista de Productos</h2>

      <button onClick={ordenarPorNombre}>Ordenar por Nombre</button>
      <button onClick={ordenarPorPrecioAsc}>Ordenar por Precio (Ascendente)</button>
      <button onClick={ordenarPorPrecioDesc}>Ordenar por Precio (Descendente)</button>

      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            {producto.nombre} - ${producto.precio}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default OrdenarLista;
