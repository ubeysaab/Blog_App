
// * Importing pages 
import Home from './pages/Home.jsx';
import Write from './pages/Write.jsx';
import Register from './pages/Register.jsx'
import Login from './pages/Login.jsx'
import Single from './pages/Single.jsx'
import './style.scss'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet
} from "react-router-dom";
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';


// in some pages we will have footer and navbar and we need to render it as layout so we will use react-router-dom outlet

const Layout = ()=>{
 return (
 <> 
      <NavBar/>
      <Outlet/>
      <Footer/>
 </>
 )
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/write",
      element:<Write/>
      },
      {
        path:"/post/:id",
        element:<Single/>
      },
    ]
  },

  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },

]);




function App() {
 
  return (
    <>
    <div className='app'>

      <div className='container'>

        <RouterProvider router={router}/>

      </div>

    </div>
    </>
  )
}

export default App
