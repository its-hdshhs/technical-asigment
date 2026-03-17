import { useState } from "react";
import api from "../utils/api";

export default function TaskForm({ refresh }) {
  const [task, setTask] = useState({ title: "", description: "" });

  const addTask = async () => {
    await api.post("/tasks", task);

    setTask({ title: "", description: "" });
    refresh();
  };

  return (
    <div className="mb-4">

      <input
        className="border p-2 mr-2"
        placeholder="Title"
        value={task.title}  
        onChange={(e)=>setTask({...task,title:e.target.value})}
      />

      <input
        className="border p-2 mr-2"
        placeholder="Description"
        value={task.description} 
        onChange={(e)=>setTask({...task,description:e.target.value})}
      />

      <button
        onClick={addTask}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add
      </button>

    </div>
  );
}