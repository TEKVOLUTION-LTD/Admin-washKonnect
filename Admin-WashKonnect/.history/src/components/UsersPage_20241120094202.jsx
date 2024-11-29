import { useState, useEffect } from "react";
import API from "../api/api";
import Pagination from "./Pagination";

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState("active");
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await API.get(`/users?status=${filter}`);
        setUsers(response.data);
      } catch (error) {
        console.error("Failed to fetch users", error);
      }
    };
    fetchUsers();
  }, [filter]);

  const startIndex = (currentPage - 1) * usersPerPage;
  const displayedUsers = users.slice(startIndex, startIndex + usersPerPage);

  return (
    <div className="">
        <h1 className="ml-4 text-white font-bold text-2xl">Users</h1>
      <div className="flex justify-between mb-4 mt-[8rem]">
      
        <button
          onClick={() => setFilter("active")}
          className={`px-[2rem] py-5 rounded ${
            filter === "active" ? "bg-gray-200 text-green-900 font-bold" : "bg-gray-200 "
          }`}
        >
          Active
        </button>
        <button
          onClick={() => setFilter("inactive")}
          className={`px-4 py-2 rounded text-red-600 font-bold ${
            filter === "inactive" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          Inactive
        </button>
      </div>
      <table className="w-full bg-white rounded shadow">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Full Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Creation Date</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {displayedUsers.map((user) => (
            <tr key={user.id} className="text-center border-t">
              <td className="p-2">{user.fullname}</td>
              <td className="p-2">{user.email}</td>
              <td className="p-2">{user.creationDate}</td>
              <td className="p-2">{user.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        totalItems={users.length}
        itemsPerPage={usersPerPage}
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};

export default UserPage;
