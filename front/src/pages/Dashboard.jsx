import { useEffect, useState } from "react";
import api from "../utils/api";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState(""); // ✅ search state
  const navigate = useNavigate();

  // 🔥 Fetch Tasks (with search)
  const fetchTasks = async (query = "") => {
    try {
      const res = await api.get(`/tasks?search=${query}`);
      setTasks(res.data);
    } catch {
      navigate("/");
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);
  // 🔍 Search button click
  const handleSearch = () => {
    fetchTasks(search);
  };

  return (
    <div className="p-6">

      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      {/* 🔍 Search Bar */}
      <div className="mb-4 flex gap-2">
        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
          className="border px-3 py-1"
        />

        <button
          onClick={handleSearch}
          className="bg-blue-500 text-white px-4 py-1"
        >
          Search
        </button>

        {/* Reset button */}
        <button
          onClick={() => {
            setSearch("");
            fetchTasks("");
          }}
          className="bg-gray-400 text-white px-4 py-1"
        >
          Reset
        </button>
      </div>

      <TaskForm refresh={() => fetchTasks(search)} />
      <TaskList tasks={tasks} refresh={() => fetchTasks(search)} />

    </div>
  );
}