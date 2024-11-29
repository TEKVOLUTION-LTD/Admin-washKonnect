import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login';
import './App.css'
import Users from './pages/Users';
import Transaction from './pages/Transaction';
import ServiceProvider from './pages/serviceProvider';
import { Children } from 'react';

function App() {

  

  return (
    <>


    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/service-provider" element={<ServiceProvider />} />
        <Route path="/transactions" element={<Transaction />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/settings" element={< Login/>} />
      </Routes>
    </BrowserRouter>

  

    



   
    </>
  )
}

export default App
