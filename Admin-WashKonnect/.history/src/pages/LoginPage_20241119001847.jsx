import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import WashkonnectLogo from '../assets/WashkonnectLogo.png'


const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/login', { email, password });
      // Redirect to Admin Dashboard
      window.location.href = '/admin';
    } catch (error) {
      setError(error.message);
    }
  };


  return (
    <> 
    <div className=' bg-blue-400'>
      <div className='flex mx-auto justify-center items-center'> <img src={WashkonnectLogo} className='object-cover w-[20rem] mb-[-17rem]' alt="" /></div>
    
    <div className="flex  items-center justify-center min-h-screen ">
          
          
          <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
            
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="block text-start text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 mt-2 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-start text-sm font-medium text-gray-600">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full px-4 py-2 mt-2 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="justify-center items-center mx-auto w-1/3 px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Log In
              </button>
            </form>
          </div>
        </div>
    
    
    </div>
        
       
      
        </>

  )
}

export default LoginPage
