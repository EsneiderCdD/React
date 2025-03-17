import { useState } from "react";

export default function ToDoList() {
  // Estado para manejar la lista de tareas
  const [tareas, setTareas] = useState([]);
  // Estado para la tarea que se está escribiendo en el input
  const [nuevaTarea, setNuevaTarea] = useState("");

  // Función para agregar una tarea
  const agregarTarea = () => {
    if (nuevaTarea.trim() === "") return; // Evita tareas vacías
    setTareas([...tareas, nuevaTarea]); // Agrega la tarea al estado
    setNuevaTarea(""); // Limpia el input después de agregar
  };

  // Función para eliminar una tarea
  const eliminarTarea = (index) => {
    const nuevasTareas = tareas.filter((_, i) => i !== index);
    setTareas(nuevasTareas);
  };

  return (
    <div className="todo-container">
      <h2>📌 Lista de Tareas</h2>

      {/* Input y botón para agregar tarea */}
      <div className="input-container">
        <input
          type="text"
          placeholder="Escribe una tarea..."
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
        />
        <button onClick={agregarTarea}>➕ Agregar</button>
      </div>

      {/* Lista de tareas */}
      {tareas.length === 0 ? (
        <p className="mensaje-vacio">No hay tareas pendientes 📝</p>
      ) : (
        <ul>
          {tareas.map((tarea, index) => (
            <li key={index}>
              {tarea}
              <button onClick={() => eliminarTarea(index)}>❌</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
