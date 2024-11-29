import { Route, Routes } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import UserPage from "../components/UsersPage";
import ServiceProviderPage from "./ServiceProviderPage";
import TransactionsPage from "./TransactionsPage";
import BookingsPage from "./BookingsPage";
import SettingsPage from "./SettingsPage";
import LogoutPage from "./LogoutPage";
import ServiceProviderProfile from "./ServiceProviderProfile";

const Dashboard = () => {
  return (
    <div className="flex h-screen ">
      <Sidebar />
      <div className="flex-1 bg-blue-200 p-4 overflow-auto ">
        <Routes>
          <Route path="users" element= {<UserPage />} />
          {/* <Route path="users" element= {<UserPage />} /> */}
          <Route path="service-providers" element={<ServiceProviderPage />} />
          <Route path="service-providerprofile" element={<ServiceProviderProfile />} />
          <Route path="transactions" element={<TransactionsPage />} />
          <Route path="bookings" element={<BookingsPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="logout" element={<LogoutPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
