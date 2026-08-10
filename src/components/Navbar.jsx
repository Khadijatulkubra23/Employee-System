import { Link, NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
        >
          <h1 className="text-2xl font-bold text-blue-600">
            Employee Management System
          </h1>
        </Link>
        {/* Navigation */}
        <div className="flex items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-semibold"
                : "text-gray-600 hover:text-blue-600 transition"
            }
          >
            Home
          </NavLink>
        </div>
        {/* Admin */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
            A
          </div>
          <span className="hidden md:block font-medium">
            Admin
          </span>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;