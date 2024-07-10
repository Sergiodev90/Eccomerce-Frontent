import { NavItem } from "../NavItem";

const NavBar = () =>{

    return(
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-semibold ">
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
                    🛒 0
                </li>
            </ul>
        </nav>
    );
}

export {NavBar};