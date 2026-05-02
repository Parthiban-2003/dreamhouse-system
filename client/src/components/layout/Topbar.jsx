import { useAuth } from "../../context/AuthContext";

const Topbar = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
      <h1 className="text-lg font-semibold">Dashboard</h1>

      <div className="flex items-center gap-4">
        <span className="text-gray-600 text-sm">
          {user?.name || "User"}
        </span>

        <button
          onClick={logout}
          className="text-red-500 hover:underline"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Topbar;