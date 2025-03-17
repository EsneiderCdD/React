import { useState, useEffect } from "react";

export default function ToDoList2() {
  // Estado de las tareas
  const [tareas, setTareas] = useState([]);
  const [filtro, setFiltro] = useState("todas");
  const [ordenAscendente, setOrdenAscendente] = useState(true);

  // Estado para el formulario de nueva tarea
  const [nuevaTarea, setNuevaTarea] = useState({
    titulo: "",
    descripcion: "",
    estado: "pendiente",
    fecha: "",
  });

  // Cargar tareas desde localStorage al iniciar
  useEffect(() => {
    const tareasGuardadas = JSON.parse(localStorage.getItem("tareas"));
    if (tareasGuardadas) setTareas(tareasGuardadas);
  }, []);

  // Guardar tareas en localStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  // Manejo de cambios en el formulario
  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setNuevaTarea((prev) => ({ ...prev, [name]: value }));
  };

  // Agregar una nueva tarea
  const agregarTarea = () => {
    if (nuevaTarea.titulo.trim() === "" || nuevaTarea.fecha === "") return;
    setTareas([...tareas, { ...nuevaTarea, id: Date.now() }]);
    setNuevaTarea({ titulo: "", descripcion: "", estado: "pendiente", fecha: "" });
  };

  // Filtrar tareas por estado
  const tareasFiltradas = tareas.filter((tarea) =>
    filtro === "todas" ? true : tarea.estado === filtro
  );

  // Ordenar tareas por fecha
  const tareasOrdenadas = [...tareasFiltradas].sort((a, b) =>
    ordenAscendente ? new Date(a.fecha) - new Date(b.fecha) : new Date(b.fecha) - new Date(a.fecha)
  );

  // Marcar una tarea como completada
  const marcarCompletada = (id) => {
    setTareas(tareas.map((tarea) =>
      tarea.id === id ? { ...tarea, estado: "completada" } : tarea
    ));
  };

  // Eliminar una tarea
  const eliminarTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  return (
    <div className="app">
      <h1>📝 Gestor de Tareas</h1>

      {/* Formulario de nueva tarea */}
      <div className="formulario">
        <input
          type="text"
          name="titulo"
          value={nuevaTarea.titulo}
          onChange={manejarCambio}
          placeholder="Título de la tarea"
        />
        <textarea
          name="descripcion"
          value={nuevaTarea.descripcion}
          onChange={manejarCambio}
          placeholder="Descripción"
        />
        <select name="estado" value={nuevaTarea.estado} onChange={manejarCambio}>
          <option value="pendiente">Pendiente</option>
          <option value="en progreso">En Progreso</option>
          <option value="completada">Completada</option>
        </select>
        <input
          type="date"
          name="fecha"
          value={nuevaTarea.fecha}
          onChange={manejarCambio}
        />
        <button onClick={agregarTarea}>Agregar Tarea</button>
      </div>

      {/* Filtros y Ordenamiento */}
      <div className="controles">
        <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
          <option value="todas">Todas</option>
          <option value="pendiente">Pendiente</option>
          <option value="en progreso">En Progreso</option>
          <option value="completada">Completada</option>
        </select>
        <button onClick={() => setOrdenAscendente(!ordenAscendente)}>
          Ordenar por Fecha {ordenAscendente ? "⬆️" : "⬇️"}
        </button>
      </div>

      {/* Lista de tareas */}
      <ul className="lista-tareas">
        {tareasOrdenadas.length > 0 ? (
          tareasOrdenadas.map((tarea) => (
            <li key={tarea.id} className={`tarea ${tarea.estado}`}>
              <div>
                <h3>{tarea.titulo}</h3>
                <p>{tarea.descripcion}</p>
                <p><strong>Fecha:</strong> {tarea.fecha}</p>
                <p><strong>Estado:</strong> {tarea.estado}</p>
              </div>
              <div className="acciones">
                {tarea.estado !== "completada" && (
                  <button onClick={() => marcarCompletada(tarea.id)}>✔ Completar</button>
                )}
                <button onClick={() => eliminarTarea(tarea.id)}>❌ Eliminar</button>
              </div>
            </li>
          ))
        ) : (
          <p className="mensaje">No hay tareas disponibles.</p>
        )}
      </ul>
    </div>
  );
}
