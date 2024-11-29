import React, { useState, useEffect } from 'react';
import axios from 'axios';


const UsersPage = () => {
  const [users, setUsers] = useState([]);
  const [activeUsers, setActiveUsers] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(10);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('/api/users');
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleFilter = (status) => {
    setActiveUsers(status === 'active');
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };



  return (
    <div className="flex flex-row h-screen">
    <Sidebar />
    <div className="flex-1 p-4">
      <div className="flex flex-row justify-between mb-4">
        <button
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${activeUsers ? 'bg-blue-700' : ''}`}
          onClick={() => handleFilter('active')}
        >
          Active Users
        </button>
        <button
          className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${!activeUsers ? 'bg-blue-700' : ''}`}
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

  )
}

export default UsersPage