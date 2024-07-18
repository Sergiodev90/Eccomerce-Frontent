import { createContext } from "react";
import { useState } from "react";



const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) =>{

    //states of count on the car market

    const [count,setCount] = useState(0);

    //states of product details 
    const [isProductDetailOpen,setIsProductDetailOpen] = useState(false);

    //states of products to show cart && productDETAILS

    const [productToShow , setProductToShow] = useState({})
    const [cartProducts, setCartProducts] = useState([])    

    //functions to open and close the product detail
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)


    return(
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen, 
            productToShow, 
            setProductToShow,
            cartProducts,
            setCartProducts
            }}>
            {children}
        </ShoppingCartContext.Provider>
    );
}

export {ShoppingCartContext}