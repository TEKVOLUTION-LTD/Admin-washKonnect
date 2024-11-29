import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-64 bg-blue-800 text-white h-full flex flex-col">
      <div className="p-4 text-2xl font-bold">WashKonnect</div>
      <nav className="flex-1 mt-[7rem]">
        {[
          { name: "Users", path: "users" },
          { name: "Service Providers", path: "service-providers" },
          { name: "Transactions", path: "transactions" },
          { name: "Bookings", path: "bookings" },
          { name: "Settings", path: "settings" },
          { name: "Logout", path: "logout" },
        ].map((link) => (
          <NavLink
            key={link.name}
            to={`/dashboard/${link.path}`}
            className={({ isActive }) =>
              `block px-4 py-2 hover:bg-blue-700 ${
                isActive ? "bg-blue-600" : ""
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
