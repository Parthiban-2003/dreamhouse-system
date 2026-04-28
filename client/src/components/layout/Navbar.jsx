import { memo } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Navbar = memo(() => {
  const { user, logout } = useAuth();
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path
      ? "text-blue-600 font-semibold"
      : "text-gray-600";

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600 tracking-tight"
        >
          DreamHouse
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className={`${isActive("/")} hover:text-blue-600 transition`}
          >
            Home
          </Link>

          {!user ? (
            <>
              <Link
                to="/login"
                className={`${isActive("/login")} hover:text-blue-600 transition`}
              >
                Login
              </Link>

              {/* CTA Button */}
              <Link
                to="/signup"
                className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition shadow-sm"
              >
                Get Started
              </Link>
            </>
          ) : (
            <>
              {/* Dashboard Link */}
              <Link
                to="/dashboard"
                className={`${isActive("/dashboard")} hover:text-blue-600 transition`}
              >
                Dashboard
              </Link>

              {/* Username */}
              <span className="text-sm text-gray-700">
                {user?.name || "User"}
              </span>

              {/* Logout */}
              <button
                onClick={logout}
                className="text-red-500 hover:text-red-600 transition"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
});

export default Navbar;