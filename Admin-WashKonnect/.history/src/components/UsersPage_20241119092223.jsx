import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar'; // Import Sidebar component

const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [activeUsers, setActiveUsers] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(10);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('/api/users');
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const handleFilter = (status) => {
    setActiveUsers(status === 'active');
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-row h-screen">
      <Sidebar />
      <div className="flex-1 p-4">
        <div className="flex flex-row justify-between mb-4">
          <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
              activeUsers ? 'bg-blue-700' : '' }`
            onClick={() => handleFilter('active')} 
          >
            Active Users
          </button>
          <button className= 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded `${
              !activeUsers ? 'bg-blue-700' : ''
            }
            onClick={() => handleFilter('inactive')}
          >
            Inactive Users
          </button>
        </div>
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2">Full Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Creation Date</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {users
              .slice((currentPage - 1) * usersPerPage, currentPage * usersPerPage)
              .map((user, index) => (
                <tr key={index}>
                  <td className="px-4 py-2">{user.fullName}</td>
                  <td className="px-4 py-2">{user.email}</td>
                  <td className="px-4 py-2">{user.creationDate}</td>
                  <td className="px-4 py-2">{user.status}</td>
                  <td className="px-4 py-2">
                    <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
                      View
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <div className="flex flex-row justify-between mt-4">
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Previous
          </button>
          <span className="text-gray-700">
            Showing {(currentPage - 1) * usersPerPage + 1} to{' '}
            {currentPage * usersPerPage} of {users.length} users
          </span>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;



