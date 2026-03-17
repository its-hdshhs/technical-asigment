import { useState } from "react";
import api from "../utils/api";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async () => {
    await api.post("/auth/register", form);
    navigate("/");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow w-80">
        <h2 className="text-xl font-bold mb-4">Register</h2>

        <input className="w-full border p-2 mb-2" placeholder="Name"
          onChange={(e)=>setForm({...form,name:e.target.value})} />

        <input className="w-full border p-2 mb-2" placeholder="Email"
          onChange={(e)=>setForm({...form,email:e.target.value})} />

        <input type="password" className="w-full border p-2 mb-4" placeholder="Password"
          onChange={(e)=>setForm({...form,password:e.target.value})} />

        <button onClick={handleSubmit}
          className="w-full bg-blue-500 text-white p-2 rounded">
          Register
        </button>
      </div>
    </div>
  );
}