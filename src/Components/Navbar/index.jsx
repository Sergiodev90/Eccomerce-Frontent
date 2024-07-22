import { NavItem } from "../NavItem";
import { ShoppingCartContext } from "../../context";
import { ShoppingBagIcon } from "@heroicons/react/16/solid";
import { useContext, useEffect } from "react";


const NavBar = () =>{

    const {open_closeCheckoutSideMenu,count} = useContext(ShoppingCartContext)

    return(
        <nav className="flex justify-between items-center w-full fixed top-0 z-10 py-5 px-8 text-sm font-semibold ">
            <ul className="flex items-center gap-3">
                <li className="font-bold text-lg ">
                    <NavItem  to='/'>Shopi</NavItem>
                </li>   
                <li>
                    <NavItem to='/' >All</NavItem>
                </li>
                <li>
                    <NavItem to="/category/women's-clothing" >Women's Clothing</NavItem>
                </li>
                <li>
                    <NavItem to="/category/men's-clothing" >Men's Clothing</NavItem>
                </li>
                <li>
                    <NavItem to="/category/jewelery"v>Jewelery</NavItem>
                </li>
                <li>
                    <NavItem to="/category/electronics" >Electronics</NavItem>
                </li>

            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    Sergio Noriega
                </li>
                <li>
                    <NavItem to='/myorders'>My Orders</NavItem>
                </li>
                <li>
                    <NavItem to='/myaccount'>My account</NavItem>
                </li>
                <li>
                    <NavItem to='/signin'>Sign in</NavItem>
                </li>
                <li>
                <div className="flex" onClick={() => open_closeCheckoutSideMenu()}>
                    <ShoppingBagIcon className="h-6 w-6" >
                     </ShoppingBagIcon>
                    <span className=" bg-white border rounded-full w-6 h-6 flex justify-center">
                        {count}
                    </span>
                </div>
  
                </li>
            </ul>
        </nav>
    );
}

export {NavBar};