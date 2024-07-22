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
    { path: "/category/women's-clothing", element: <Home/>},
    { path: "/category/men's-clothing", element: <Home/>},
    { path: "/category/jewelery", element: <Home/>},
    { path: "/category/electronics", element: <Home/>},
    { path: '/my-account', element: <Myaccount /> },
    { path: '/my-order', element: <Myorder /> },
    { path: '/my-orders', element: <Myorders /> },
    { path: '/my-orders/last', element: <Myorder /> },
    { path: '/my-orders/:id', element: <Myorder /> },
    { path: '/sign-in', element: <Signin /> },
    { path: '/*', element: <NotFound /> },

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
