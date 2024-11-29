import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from './components/Login';
import './App.css'
import 

function App() {

  const router = createBrowserRouter([
    {path:'/', 
      element: <Users />
    }
  ])


  return (
    <>
    <div className=''>    <Login /> </div>
   
    </>
  )
}

export default App
