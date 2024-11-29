import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from './components/Login';
import './App.css'
import Users from './pages/users';
import ServiceProvider from './pages/serviceProvider';

function App() {

  const router = createBrowserRouter([
    {path:'/', 
      element: <Users />
    },

    {path:'/serviceProvider', 
      element: <ServiceProvider />
    }
  ])


  return (
    <>
    <div className=''>    <Login /> </div>
   
    </>
  )
}

export default App
