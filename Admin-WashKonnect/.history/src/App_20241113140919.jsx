import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from './components/Login';
import './App.css'

function App() {

  const router = createBrowserRouter([
    {path:'/', component}
  ])


  return (
    <>
    <div className=''>    <Login /> </div>
   
    </>
  )
}

export default App
