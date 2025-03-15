import { useState } from "react";

function Ejercicio1() {
    const [tareas, setTareas] = useState([]);
    const [nuevaTarea, setNuevaTarea] = useState("");

    const agregarTarea = () => {
        if (nuevaTarea.trim() === "") return;
        setTareas([...tareas, nuevaTarea]);
        setNuevaTarea("");
    };

    const eliminarTarea = (index) => {
        setTareas(tareas.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h2>Lista de Tareas</h2>
            <input 
                type="text" 
                value={nuevaTarea} 
                onChange={(e) => setNuevaTarea(e.target.value)}
            />
            <button onClick={agregarTarea}>Agregar</button>

            <ul>
                {tareas.map((tarea, index) => (
                    <li key={index}>
                        {tarea} 
                        <button onClick={() => eliminarTarea(index)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Ejercicio1