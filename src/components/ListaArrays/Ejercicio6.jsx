import { useState } from "react";

function ListaTareas() {
  // 1️⃣ Estado inicial: Lista de tareas con id, texto y estado de completado
  const [tareas, setTareas] = useState([
    { id: 1, texto: "Aprender React", completada: false },
    { id: 2, texto: "Hacer ejercicios de JavaScript", completada: false },
    { id: 3, texto: "Leer documentación de React", completada: false },
  ]);

  // 2️⃣ Función para marcar una tarea como completada
  const completarTarea = (id) => {
    setTareas(
      tareas.map((tarea) =>
        tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
      )
    );
  };

  // 3️⃣ Función para eliminar una tarea
  const eliminarTarea = (id) => {
    setTareas(tareas.filter((tarea) => tarea.id !== id));
  };

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <ul>
        {tareas.map((tarea) => (
          <li
            key={tarea.id}
            style={{
              textDecoration: tarea.completada ? "line-through" : "none",
              color: tarea.completada ? "gray" : "black",
            }}
          >
            {tarea.texto}
            <button onClick={() => completarTarea(tarea.id)}>
              {tarea.completada ? "Desmarcar" : "Completar"}
            </button>
            <button onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaTareas;
