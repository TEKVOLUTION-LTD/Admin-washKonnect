import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/api";
import { FaEye } from "react-icons/fa";

const ServiceProviderPage = () => {
  const [serviceProviders, setServiceProviders] = useState([]);
  const [filteredProviders, setFilteredProviders] = useState([]);
  const [filter, setFilter] = useState("active"); // Default filter
  const navigate = useNavigate();

  // Fetch service providers data from the backend
  useEffect(() => {
    const fetchServiceProviders = async () => {
      try {
        const response = await API.get("/service-providers"); // Replace with your API endpoint
        setServiceProviders(response.data);
        setFilteredProviders(response.data.filter((sp) => sp.status === "Active"));
      } catch (error) {
        console.error("Error fetching service providers:", error);
      }
    };
    fetchServiceProviders();
  }, []);

  // Filter data based on status
  const handleFilterChange = (status) => {
    setFilter(status);
    setFilteredProviders(serviceProviders.filter((sp) => sp.status === status));
  };

  // Toggle active/inactive status
  const handleToggleStatus = async (spId, currentStatus) => {
    try {
      const newStatus = currentStatus === "Active" ? "Inactive" : "Active";
      await API.put(`/service-providers/${spId}/status`, { status: newStatus }); // API to update status
      setServiceProviders((prev) =>
        prev.map((sp) =>
          sp.id === spId ? { ...sp, status: newStatus } : sp
        )
      );
      setFilteredProviders((prev) =>
        prev.map((sp) =>
          sp.id === spId ? { ...sp, status: newStatus } : sp
        )
      );
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

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
          {filteredProviders.map((sp) => (
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
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="hidden"
                    checked={sp.status === "Active"}
                    onChange={() => handleToggleStatus(sp.id, sp.status)}
                  />
                  <div
                    className={`w-10 h-6 rounded-full ${
                      sp.status === "Active" ? "bg-green-500" : "bg-red-500"
                    } relative`}
                  >
                    <div
                      className={`w-4 h-4 bg-white rounded-full absolute transition-transform duration-200 ${
                        sp.status === "Active" ? "translate-x-5" : "translate-x-0"
                      }`}
                    ></div>
                  </div>
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ServiceProviderPage;
