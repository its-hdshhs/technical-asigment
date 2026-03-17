import { useState } from "react";
import api from "../utils/api";

export default function TaskList({ tasks, refresh }) {
  const [editId, setEditId] = useState(null);
  const [form, setForm] = useState({ title: "", description: "" });

  // DELETE
  const deleteTask = async (id) => {
    await api.delete(`/tasks/${id}`);
    refresh();
  };

  // START EDIT
  const startEdit = (task) => {
    setEditId(task._id);
    setForm({
      title: task.title,
      description: task.description,
    });
  };

  // UPDATE
  const updateTask = async () => {
    await api.put(`/tasks/${editId}`, form);
    setEditId(null);
    refresh();
  };

  return (
    <div>
      {tasks.map((t) => (
        <div key={t._id} className="bg-white p-4 mb-2 shadow rounded">

          {editId === t._id ? (
            <>
              <input
                value={form.title}
                onChange={(e) =>
                  setForm({ ...form, title: e.target.value })
                }
                className="border p-1 w-full mb-2"
              />

              <input
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                className="border p-1 w-full mb-2"
              />

              <button
                onClick={updateTask}
                className="bg-green-500 text-white px-2 py-1 mr-2 rounded"
              >
                Save
              </button>

              <button
                onClick={() => setEditId(null)}
                className="bg-gray-500 text-white px-2 py-1 rounded"
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <h3 className="font-bold">{t.title}</h3>
              <p>{t.description}</p>

              <button
                onClick={() => startEdit(t)}
                className="bg-blue-500 text-white px-2 py-1 mt-2 mr-2 rounded"
              >
                Edit
              </button>

              <button
                onClick={() => deleteTask(t._id)}
                className="bg-red-500 text-white px-2 py-1 mt-2 rounded"
              >
                Delete
              </button>
            </>
          )}

        </div>
      ))}
    </div>
  );
}