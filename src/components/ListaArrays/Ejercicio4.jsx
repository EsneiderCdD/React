import { useState } from "react";

function ListaUsuarios () {

    const [usuarios, setUsuarios] = ([
        { id: 1, nombre: "Esneider" },
        { id: 2, nombre: "Julian"},
        { id: 3, nombre: "Pedro"},
    ]);

    const [usuariosEliminados, setUsuariosEliminados] = useState([]);


    const eliminarUsuario = (id) => {
        const usuarioAEliminar = usuarios.find((usuario) => usuario.id === id);
        setUsuarios(usuarios.filter((usuario) => usuario.id !== id));
        setUsuarios ([...usuarios, usuarioARestaurar]); 

    }


    return (
        <div>
            <h2>Usuario Activos</h2>
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
                <li key={usuario.id}>{usuario.nombre}
                <button onClick= {() => restaurarUsuario(usuario.id)}>Restaurar</button>
                </li>
            ))}
        </ul>



        </div>
    )

}
export default ListaUsuarios