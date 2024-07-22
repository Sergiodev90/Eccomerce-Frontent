import { createContext,useState, useEffect } from "react";
import { api } from "../Api";
import axios from "axios";



const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({children}) =>{

    //the state to get the items of the api

    const [items, setItems] = useState(null);

    //effect to get the data
    useEffect(()=>{

        const fetchData = async() =>{
            try{
                const response = await axios.get(`${api}/products`)
                setItems(response.data)
            }catch(error){
                console.error(error)
            }
        }
        fetchData()
    }, [])

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
            setOrder,
            items,
            setItems
            }}>
            {children}
        </ShoppingCartContext.Provider>
    );
}

export {ShoppingCartContext}