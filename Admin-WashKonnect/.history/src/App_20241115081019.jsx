import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom'
import Login from './components/Login';
import Menu from './components/Menu';
import './App.css'
import Users from './pages/users';
import Transaction from './pages/Transaction';
import ServiceProvider from './pages/serviceProvider';

function App() {

  const Layout = () => {

    return (
      <div>
<div>
  <Menu/>
</div>
<div>

  <Outlet/>
</div>
      </div>
      
    )
  }

  const router = createBrowserRouter([
    {path:'/', 
      element: <Users />
    },

    {path:'/serviceProvider', 
      element: <ServiceProvider />
    },
    {path:'/transaction', 
      element: <Transaction />
    },
  ])


  return (
    <>
    <div className=''>    <Login /> </div>

<RouterProvider router={router} />

   
    </>
  )
}

export default App
