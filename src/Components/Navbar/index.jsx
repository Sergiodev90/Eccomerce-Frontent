import { NavItem } from "../NavItem";
import { ShoppingCartContext } from "../../context";
import { ShoppingBagIcon } from "@heroicons/react/16/solid";
import { CheckoutSideMenu } from "../CheckoutSideMenu";
import { useContext } from "react";

const NavBar = () =>{

    const {count} = useContext(ShoppingCartContext)
    return(
        <nav className="flex justify-between items-center w-full fixed top-0 z-10 py-5 px-8 text-sm font-semibold ">
            <ul className="flex items-center gap-3">
                <li className="font-bold text-lg ">
                    <NavItem  to='/'>Shopi</NavItem>
                </li>   
                <li>
                    <NavItem to='/All' >¡All</NavItem>
                </li>
                <li>
                    <NavItem to='/clothes' >Clothes</NavItem>
                </li>
                <li>
                    <NavItem to='/electronics'>Electronics</NavItem>
                </li>
                <li>
                    <NavItem to='/furnitures'>Furnitures</NavItem>
                </li>
                <li>
                    <NavItem to='/toys'>Toys</NavItem>
                </li>
                <li>
                    <NavItem to='/others'>Others</NavItem>
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
                <div className="flex">
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