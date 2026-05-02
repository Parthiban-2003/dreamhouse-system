import { Link, useLocation } from "react-router-dom";
import { FaHome, FaBox, FaMoneyBill, FaUsers, FaUser } from "react-icons/fa";

const Sidebar = () => {
  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/dashboard", icon: <FaHome /> },
    { name: "Materials", path: "/materials", icon: <FaBox /> },
    { name: "Payments", path: "/payments", icon: <FaMoneyBill /> },
    { name: "Employees", path: "/employees", icon: <FaUsers /> },
    { name: "Profile", path: "/profile", icon: <FaUser /> },
  ];

  return (
    <aside className="w-64 bg-white shadow-md p-5">
      <h2 className="text-xl font-bold mb-6 text-blue-600">
        DreamHouse
      </h2>

      <nav className="flex flex-col gap-3">
        {menu.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-3 p-3 rounded-xl transition ${
              location.pathname === item.path
                ? "bg-blue-600 text-white"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;