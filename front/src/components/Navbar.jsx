import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar({ isLoggedIn, setIsLoggedIn, onSearch }) {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(search); // 👉 parent ko bhej raha
    }
  };

  return (
    <nav className="bg-blue-600 p-4">

      {/* Top */}
      <div className="flex justify-between items-center">

        {/* Logo */}
        <h1 className="text-white font-bold text-xl">
          Task Manager
        </h1>

        {/* Right side */}
        <div className="flex gap-2 items-center">

          {/* Search */}
          {isLoggedIn && (
            <form onSubmit={handleSearch} className="flex">
              <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                className="px-2 py-1"
              />
              <button
                type="submit"
                className="bg-white text-blue-600 px-3"
              >
                Go
              </button>
            </form>
          )}

          {/* Links */}
          {!isLoggedIn ? (
            <>
              <Link to="/" className="text-white border px-3 py-1">
                Login
              </Link>

              <Link to="/register" className="bg-white text-blue-600 px-3 py-1">
                Register
              </Link>
            </>
          ) : (
            <Link to="/dashboard" className="text-white border px-3 py-1">
              Dashboard
            </Link>
          )}

        </div>
      </div>

      {/* Bottom Logout */}
     
        <div className="flex justify-end mt-3">
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-1"
          >
            Logout
          </button>
        </div>
      

    </nav>
  );
}