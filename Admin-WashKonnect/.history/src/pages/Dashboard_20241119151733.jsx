import { Route, Routes } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import UserPage from "../components/UsersPage";
import ServiceProviderPage from "./ServiceProviderPage";
import TransactionPage from "./TransactionPage";
import BookingsPage from "./BookingsPage";
import SettingsPage from "./SettingsPage";
import LogoutPage from "./LogoutPage";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 bg-blue-100 p-4 overflow-auto">
        <Routes>
          <Route path="users" element={<UserPage />} />
          <Route path="service-providers" element={<ServiceProviderPage />} />
          <Route path="transactions" element={<TransactionPage />} />
          <Route path="bookings" element={<BookingsPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="logout" element={<LogoutPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
