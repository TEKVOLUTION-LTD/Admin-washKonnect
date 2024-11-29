import { NavLink } from "react-router-dom";
import { FaUsers, FaUserTie, FaExchangeAlt, FaCalendarAlt, FaCog, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  const links = [
    { name: "Users", path: "users", icon: <FaUsers /> },
    { name: "Service Providers", path: "service-providers", icon: <FaUserTie /> },
    { name: "Transactions", path: "transactions", icon: <FaExchangeAlt /> },
    { name: "Bookings", path: "bookings", icon: <FaCalendarAlt /> },
    { name: "Settings", path: "settings", icon: <FaCog /> },
    { name: "Logout", path: "logout", icon: <FaSignOutAlt /> },
  ];

  return (
    <div className="w-64 bg-blue-800 text-white h-full  flex flex-col">
      <div className="p-4 text-2xl font-bold">WashKonnect</div>
      <nav className="flex-1 mt-[7rem] ml-[3rem]">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={`/dashboard/${link.path}`}
            className={({ isActive }) =>
              `block px-4 py-2 flex items-center space-x-4 hover:bg-blue-400 ${
                isActive ? "bg-blue-600" : ""
              }`
            }
          >
            <span className="text-xl">{link.icon}</span>
            <span>{link.name}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
