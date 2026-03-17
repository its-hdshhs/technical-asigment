import { useState } from "react";
import api from "../utils/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async () => {
    await api.post("/auth/login", form);
    navigate("/dashboard");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded-xl shadow w-80">
        <h2 className="text-xl font-bold mb-4">Login</h2>

        <input className="w-full border p-2 mb-2" placeholder="Email"
          onChange={(e)=>setForm({...form,email:e.target.value})} />

        <input type="password" className="w-full border p-2 mb-4" placeholder="Password"
          onChange={(e)=>setForm({...form,password:e.target.value})} />

        <button onClick={handleLogin}
          className="w-full bg-green-500 text-white p-2 rounded">
          Login
        </button>
      </div>
    </div>
  );
}