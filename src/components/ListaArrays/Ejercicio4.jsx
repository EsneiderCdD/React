import { useState } from "react";

function ListaUsuarios() {
  // Estado para la lista de usuarios activos
  const [usuarios, setUsuarios] = useState([
    { id: 1, nombre: "Ana" },
    { id: 2, nombre: "Carlos" },
    { id: 3, nombre: "Beatriz" }
  ]);

  // Estado para la lista de usuarios eliminados
  const [usuariosEliminados, setUsuariosEliminados] = useState([]);

  // Función para eliminar un usuario (mueve el usuario a la lista de eliminados)
  const eliminarUsuario = (id) => {
    // Encontramos el usuario a eliminar
    const usuarioAEliminar = usuarios.find((usuario) => usuario.id === id);
    // Filtramos la lista de usuarios activos para quitar el eliminado
    setUsuarios(usuarios.filter((usuario) => usuario.id !== id));
    // Agregamos el usuario eliminado a la otra lista
    setUsuariosEliminados([...usuariosEliminados, usuarioAEliminar]);
  };

  // Función para restaurar un usuario eliminado (lo regresa a la lista de activos)
  const restaurarUsuario = (id) => {
    // Encontramos el usuario a restaurar
    const usuarioARestaurar = usuariosEliminados.find((usuario) => usuario.id === id);
    // Filtramos la lista de eliminados para quitar el restaurado
    setUsuariosEliminados(usuariosEliminados.filter((usuario) => usuario.id !== id));
    // Agregamos el usuario restaurado a la lista de usuarios activos
    setUsuarios([...usuarios, usuarioARestaurar]);
  };

  return (
    <div>
      <h2>Usuarios Activos</h2>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            {usuario.nombre}
            <button onClick={() => eliminarUsuario(usuario.id)}>Eliminar</button>
          </li>
        ))}
      </ul>

      <h2>Usuarios Eliminados</h2>
      <ul>
        {usuariosEliminados.map((usuario) => (
          <li key={usuario.id}>
            {usuario.nombre}
            <button onClick={() => restaurarUsuario(usuario.id)}>Restaurar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaUsuarios;
