import React, {useState} from 'react'
import WashkonnectLogo from '../assets/WashkonnectLogo.png'

const Login = () => {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here (e.g., authentication API call)
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (

    <> 
<div className=' bg-blue-400 m-9 '>
  <div className=''> <img src={WashkonnectLogo} alt="" /></div>

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
            className="w-1/3 px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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

export default Login
