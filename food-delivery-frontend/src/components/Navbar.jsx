import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { dark, setDark } = useContext(ThemeContext);
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow px-6 py-4 flex justify-between">
      <Link to="/" className="text-2xl font-bold text-orange-500">
        FoodExpress
      </Link>

      <div className="flex items-center gap-4">
        <Link to="/cart">Cart</Link>

        {user?.role === "admin" && (
          <Link to="/admin/dashboard">Admin</Link>
        )}

        {user ? (
          <button onClick={logout} className="text-red-500">
            Logout
          </button>
        ) : (
          <Link to="/login">Login</Link>
        )}

        <button
          onClick={() => setDark(!dark)}
          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded"
        >
          {dark ? "Light" : "Dark"}
        </button>
      </div>
    </nav>
  );
}
