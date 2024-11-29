import React from "react";
import { FaUsers, FaUserTie, FaExchangeAlt, FaCalendarAlt, FaCog, FaSignOutAlt } from "react-icons/fa"; // Import specific icons

const Sidebar = ({ onLinkClick }) => {
  const menuItems = [
    { name: "Users", icon: <FaUsers />, page: "users" },
    { name: "Service Provider", icon: <FaUserTie />, page: "serviceProvider" },
    { name: "Transaction", icon: <FaExchangeAlt />, page: "transaction" },
    { name: "Bookings", icon: <FaCalendarAlt />, page: "bookings" },
    { name: "Settings", icon: <FaCog />, page: "settings" },
    { name: "Logout", icon: <FaSignOutAlt />, page: "logout" },
  ];

  return (
    <div className="h-screen w-64 bg-blue-800 text-white flex flex-col">
      <div className="text-center py-6 font-bold text-lg">WashKonnect</div>
      <ul className="flex flex-col space-y-4 px-4 mt-6">
        {menuItems.map((item, index) => (
          <li
            key={index}
            onClick={() => onLinkClick(item.page)}
            className="flex items-center space-x-4 cursor-pointer p-2 hover:bg-blue-700 rounded"
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
