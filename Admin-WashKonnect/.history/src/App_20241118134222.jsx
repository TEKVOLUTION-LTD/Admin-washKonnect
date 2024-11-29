import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom'
import Login from './components/Login';
import Menu from './components/Menu';
import './App.css'
import Users from './pages/users';
import Transaction from './pages/Transaction';
import ServiceProvider from './pages/serviceProvider';
import { Children } from 'react';

function App() {

  

  return (
    <>

return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/service-provider" element={<ServiceProviderPage />} />
        <Route path="/transactions" element={<TransactionsPage />} />
        <Route path="/bookings" element={<BookingsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </BrowserRouter>
    
  );

    <div className='text-align: center;'>    <Login /> </div>



   
    </>
  )
}

export default App
