import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from '../../context'
import { Home } from '../Home'
import { Myaccount } from '../Myaccount'
import { Myorder } from '../Myorder'
import { Myorders } from '../Myorders'
import { NotFound } from '../NotFound'
import { Signin } from '../Signin'
import { NavBar } from '../../Components/Navbar'
import {CheckoutSideMenu} from "../../Components/CheckoutSideMenu"
import './App.css'



const AppRoutes = () =>{
  
  
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/myaccount', element: <Myaccount /> },
    { path: '/myorder', element: <Myorder /> },
    { path: '/myorders', element: <Myorders /> },
    {path: '/myorders/last', element: <Myorder/>},
    { path: '/signin', element: <Signin /> },
    {path: '/*',element: <NotFound />},
  ]);


  return routes;
}



const App  = () => { 


  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <CheckoutSideMenu/>

        <AppRoutes/>
      </BrowserRouter>

    </>
  )
}

export {App}
