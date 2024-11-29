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
    <div>
      
    </div>
  )
}

export default UsersPage
