import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import UsersPage from './pages/UsersPage';
import ServiceProviderPage from './pages/ServiceProviderPage';
import TransactionsPage from './pages/TransactionsPage';
import BookingsPage from './pages/BookingsPage';
import SettingsPage from './pages/SettingsPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin" element={<UsersPage />} />
        <Route path="/admin/users" element={<UsersPage />} />
        <Route path="/admin/service-provider" element={<ServiceProviderPage />} />
        <Route path="/admin/transactions" element={<TransactionsPage />} />
        <Route path="/admin/bookings" element={<BookingsPage />} />
        <Route path="/admin/settings" element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
