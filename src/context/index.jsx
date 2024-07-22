import { createContext } from "react";
import { useState } from "react";



const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) =>{

    //states of count on the car market

    const [count,setCount] = useState(0);

    //states of product details 
    const [isProductDetailOpen,setIsProductDetailOpen] = useState(false);
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)

    //states of products to show cart && productDETAILS && orders

    const [productToShow , setProductToShow] = useState({})
    const [cartProducts, setCartProducts] = useState([])    
    const [order,setOrder] = useState([])

    //functions to open and close the product detail
    const open_closeProductDetail = () => setIsProductDetailOpen(!isProductDetailOpen)
    const open_closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(!isCheckoutSideMenuOpen)

    const DeteleteOrderCard = (id) =>{
        const newCartProducts = cartProducts.filter((product) => product.id !== id);
        setCount(count - 1)
        setCartProducts(newCartProducts)
    }

    return(
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            open_closeProductDetail,
            open_closeCheckoutSideMenu,
            isProductDetailOpen,
            isCheckoutSideMenuOpen, 
            productToShow, 
            setProductToShow,
            cartProducts,
            setCartProducts,
            DeteleteOrderCard,
            order,
            setOrder
            }}>
            {children}
        </ShoppingCartContext.Provider>
    );
}

export {ShoppingCartContext}