
import React from 'react';
import { NavLink } from 'react-router-dom';


const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-100 p-4 h-screen fixed top-0 left-0">
    <ul>
      <li>
        <NavLink to="/admin/users" activeClassName="bg-gray-300">
          Users
        </NavLink>
      </li>
      <li>
        <NavLink to="/admin/service-provider" activeClassName="bg-gray-300">
          Service Provider
        </NavLink>
      </li>
      <li>
        <NavLink to="/admin/transactions" activeClassName="bg-gray-300">
          Transactions
        </NavLink>
      </li>
      <li>
        <NavLink to="/admin/bookings" activeClassName="bg-gray-300">
          Bookings
        </NavLink>
      </li>
      <li>
        <NavLink to="/admin/settings" activeClassName="bg-gray-300">
          Settings
        </NavLink>
      </li>
      <li className="mt-4">
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Logout
        </button>
      </li>
    </ul>
  </div>

  )
}

export default Sidebar
