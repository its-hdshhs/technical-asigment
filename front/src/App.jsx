import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import { useState } from "react";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (

<>
  <BrowserRouter>

    <Navbar 
      isLoggedIn={isLoggedIn} 
      setIsLoggedIn={setIsLoggedIn} 
    />

    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>

  </BrowserRouter>
</>
  )
}

export default App;