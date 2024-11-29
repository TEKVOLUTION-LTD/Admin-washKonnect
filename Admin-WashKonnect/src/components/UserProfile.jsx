import { useState, useEffect } from "react";
import API from "../api/api";

const UserProfile = () => {
  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  const [message, setMessage] = useState("");

  // Simulate fetching user data (replace with real API call)
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await API.get("/user/profile"); // Backend API to fetch user profile
        setProfile({
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          email: response.data.email,
          phoneNumber: response.data.phoneNumber,
        });
      } catch (err) {
        console.error("Failed to fetch profile", err);
      }
    };

    fetchProfile();
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle profile update
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await API.put("/user/profile", profile); // Backend API to update profile
      setMessage("Profile updated successfully!");
    } catch (err) {
      console.error("Failed to update profile", err);
      setMessage("Failed to update profile.");
    }
  };

  return (
    <div className="p-6 bg-blue-200 h-full flex justify-center items-center">
      <div className="bg-white p-8 rounded-md shadow-md w-[500px]">
        <h2 className="text-xl font-bold mb-6 text-center">Update Profile</h2>
        {message && (
          <p
            className={`text-center mb-4 ${
              message.includes("successfully")
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}
        <form onSubmit={handleUpdate}>
          <div className="mb-4 flex gap-4">
            <div className="flex-1">
              <label className="block mb-2 text-gray-700">First Name</label>
              <input
                type="text"
                name="firstName"
                value={profile.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none"
                placeholder="First Name"
              />
            </div>
            <div className="flex-1">
              <label className="block mb-2 text-gray-700">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={profile.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-md focus:outline-none"
                placeholder="Last Name"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none"
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-gray-700">Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={profile.phoneNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none"
              placeholder="Phone Number"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserProfile;
