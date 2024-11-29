import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage';
import UsersPage from './UsersPage';
import ServiceProviderPage from './ServiceProviderPage';
import TransactionsPage from './TransactionsPage';
import BookingsPage from './BookingsPage';
import SettingsPage from './SettingsPage';

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
