import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";
import { FaEye } from "react-icons/fa";

const ServiceProviderPage = () => {
  const [serviceProviders, setServiceProviders] = useState([]);
  const [filteredProviders, setFilteredProviders] = useState([]);
  const [filter, setFilter] = useState("Active"); // Default filter
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items per page
  const navigate = useNavigate();

  // Fetch service providers data from the backend
  useEffect(() => {
    const fetchServiceProviders = async () => {
      try {
        const response = await API.get("/service-providers"); // Replace with your API endpoint
        setServiceProviders(response.data);
        filterProviders(response.data, filter); // Filter data after fetching
      } catch (error) {
        console.error("Error fetching service providers:", error);
      }
    };
    fetchServiceProviders();
  }, []);

  // Filter service providers by status
  const filterProviders = (data, status) => {
    setFilteredProviders(data.filter((sp) => sp.status === status));
    setCurrentPage(1); // Reset to the first page on filter change
  };

  // Handle filter button clicks
  const handleFilterChange = (status) => {
    setFilter(status);
    filterProviders(serviceProviders, status);
  };

  // Pagination logic
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedProviders = filteredProviders.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredProviders.length / itemsPerPage);

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-blue-700">WashKonnect</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Toggle Next
        </button>
      </div>

      {/* Status Buttons */}
      <div className="flex justify-around mb-6">
        <button
          className={`px-4 py-2 rounded ${
            filter === "Active" ? "bg-green-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => handleFilterChange("Active")}
        >
          Active: {serviceProviders.filter((sp) => sp.status === "Active").length}
        </button>
        <button
          className={`px-4 py-2 rounded ${
            filter === "Inactive" ? "bg-red-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => handleFilterChange("Inactive")}
        >
          Inactive:{" "}
          {serviceProviders.filter((sp) => sp.status === "Inactive").length}
        </button>
        <button
          className={`px-4 py-2 rounded ${
            filter === "Pending" ? "bg-yellow-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => handleFilterChange("Pending")}
        >
          Pending:{" "}
          {serviceProviders.filter((sp) => sp.status === "Pending").length}
        </button>
      </div>

      {/* Table */}
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead className="bg-blue-600 text-white">
          <tr>
            <th className="border border-gray-300 p-2">SPID</th>
            <th className="border border-gray-300 p-2">Business Name</th>
            <th className="border border-gray-300 p-2">Creation Date</th>
            <th className="border border-gray-300 p-2">Status</th>
            <th className="border border-gray-300 p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {paginatedProviders.map((sp) => (
            <tr key={sp.id}>
              <td className="border border-gray-300 p-2">{sp.spid}</td>
              <td className="border border-gray-300 p-2">{sp.businessName}</td>
              <td className="border border-gray-300 p-2">{sp.creationDate}</td>
              <td className="border border-gray-300 p-2">{sp.status}</td>
              <td className="border border-gray-300 p-2 flex items-center justify-around">
                <FaEye
                  className="cursor-pointer text-blue-500"
                  onClick={() => navigate(`/dashboard/service-providers/${sp.id}`)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          Previous
        </button>
        <p>
          Page {currentPage} of {totalPages}
        </p>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ServiceProviderPage;
