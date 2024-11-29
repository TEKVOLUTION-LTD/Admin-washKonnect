import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import API from "../api/api";
import WashkonnectLogo from "../assets/WashkonnectLogo.png";

const ServiceProviderProfile = () => {
  const { id } = useParams(); // Get the SPID from the URL
  const [provider, setProvider] = useState(null); // State for service provider data

  useEffect(() => {
    const fetchServiceProvider = async () => {
      try {
        const response = await API.get(`/service-providerprofile/${id}`); // Fetch data based on SPID
        setProvider(response.data);
      } catch (error) {
        console.error("Failed to fetch service provider", error);
      }
    };
    fetchServiceProvider();
  }, [id]);

  if (!provider) {
    return <div>Loading...</div>; // Display a loading state while fetching data
  }

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-[20%] bg-blue-800 text-white h-screen flex flex-col justify-center items-center">
        <img
          src="https://via.placeholder.com/100" // Placeholder for user profile
          alt="Admin"
          className="w-20 h-20 rounded-full mb-4"
        />
        <h2 className="text-xl font-bold">Admin Users</h2>
        <nav className="mt-10">
          <ul>
            <li className="mb-4">
              <a href="/dashboard/users" className="flex items-center gap-2">
                <i className="fas fa-user"></i> Users
              </a>
            </li>
            <li className="mb-4">
              <a href="/dashboard/service-providers" className="flex items-center gap-2">
                <i className="fas fa-users"></i> Service provider
              </a>
            </li>
            <li className="mb-4">
              <a href="/dashboard/transactions" className="flex items-center gap-2">
                <i className="fas fa-receipt"></i> Transaction
              </a>
            </li>
            <li className="mb-4">
              <a href="/dashboard/bookings" className="flex items-center gap-2">
                <i className="fas fa-calendar-alt"></i> Bookings
              </a>
            </li>
            <li className="mb-4">
              <a href="/dashboard/settings" className="flex items-center gap-2">
                <i className="fas fa-cog"></i> Settings
              </a>
            </li>
            <li>
              <a href="/logout" className="flex items-center gap-2">
                <i className="fas fa-sign-out-alt"></i> Logout
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Profile Details */}
      <div className="w-[80%] bg-blue-100 p-10">
        <div>
          <img src={WashkonnectLogo} alt="WashKonnect Logo" className="h-20 mb-5" />
        </div>
        <h1 className="text-2xl font-bold mb-5 text-blue-800">Service Provider / Profile</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center gap-4 mb-6">
            <img
              src="https://via.placeholder.com/100"
              alt="Service Provider"
              className="w-20 h-20 rounded-full"
            />
            <div>
              <h2 className="text-xl font-bold">{provider.businessName}</h2>
              <p>SPID: {provider.spid}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-bold mb-1">First Name</label>
              <input
                type="text"
                value={provider.firstName}
                readOnly
                className="w-full px-4 py-2 border rounded focus:outline-none bg-gray-100"
              />
            </div>
            <div>
              <label className="block font-bold mb-1">Last Name</label>
              <input
                type="text"
                value={provider.lastName}
                readOnly
                className="w-full px-4 py-2 border rounded focus:outline-none bg-gray-100"
              />
            </div>
            <div>
              <label className="block font-bold mb-1">Email</label>
              <input
                type="email"
                value={provider.email}
                readOnly
                className="w-full px-4 py-2 border rounded focus:outline-none bg-gray-100"
              />
            </div>
            <div>
              <label className="block font-bold mb-1">Phone Number</label>
              <input
                type="text"
                value={provider.phone}
                readOnly
                className="w-full px-4 py-2 border rounded focus:outline-none bg-gray-100"
              />
            </div>
            <div>
              <label className="block font-bold mb-1">Verification Documents</label>
              <input
                type="text"
                value={provider.verificationDocuments}
                readOnly
                className="w-full px-4 py-2 border rounded focus:outline-none bg-gray-100"
              />
            </div>
            <div>
              <label className="block font-bold mb-1">Address</label>
              <input
                type="text"
                value={provider.address}
                readOnly
                className="w-full px-4 py-2 border rounded focus:outline-none bg-gray-100"
              />
            </div>
            <div>
              <label className="block font-bold mb-1">Business Hours</label>
              <input
                type="text"
                value={provider.businessHours}
                readOnly
                className="w-full px-4 py-2 border rounded focus:outline-none bg-gray-100"
              />
            </div>
            <div>
              <label className="block font-bold mb-1">Service Type(s)</label>
              <input
                type="text"
                value={provider.serviceTypes}
                readOnly
                className="w-full px-4 py-2 border rounded focus:outline-none bg-gray-100"
              />
            </div>
          </div>
          <div className="mt-6 text-center">
            <button className="px-8 py-2 bg-blue-800 text-white font-bold rounded">Verify</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceProviderProfile;
