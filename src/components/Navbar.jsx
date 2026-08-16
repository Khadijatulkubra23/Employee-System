import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
function Navbar() {
  const { darkMode, toggleTheme } = useTheme();
  const { user, login, logout } = useContext(AuthContext);
  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <NavLink to="/">
          <h1 className="text-xl md:text-2xl font-bold text-blue-600">
            Employee Management System
          </h1>
        </NavLink>
        <div className="flex items-center gap-6">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 dark:text-blue-400 font-semibold"
                : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition"
            }
          >
            Home
          </NavLink>
          <button
            onClick={toggleTheme}
            className="px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
            title="Toggle theme"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
          {user ? (
            <div className="flex items-center gap-3">

              <div className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                {user.name.charAt(0).toUpperCase()}
              </div>

              <span className="hidden md:block text-gray-700 dark:text-gray-200 font-medium">
                {user.name}
              </span>

              <button
                onClick={logout}
                className="text-sm text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition"
              >
                Logout
              </button>

            </div>
          ) : (
            <button
              onClick={login}
              className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition"
            >
              Login
            </button>
          )}

        </div>
      </div>
    </nav>
  );
}

export default Navbar;