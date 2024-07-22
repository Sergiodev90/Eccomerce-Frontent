import { ShoppingCartContext } from "../../context"
import { PlusIcon, CheckCircleIcon} from "@heroicons/react/16/solid"
import { useContext } from "react"
const CardItem = ({item}) => {
    const {
        count,
        setCount,
        open_closeProductDetail,
        setProductToShow,
        setCartProducts,
        cartProducts,
        open_closeCheckoutSideMenu,
        isCheckoutSideMenuOpen,
        isProductDetailOpen
        

    } = useContext(ShoppingCartContext)
    

    const IncrementCount = () =>{
        setCount(count + 1)
    }
    const showProduct = (data) =>{
      if(!isCheckoutSideMenuOpen){
        open_closeProductDetail()
        setProductToShow(data)
      }else{
        open_closeCheckoutSideMenu()
      }
      
    }
    const  addProductToCart = (event,productData) => {
      event.stopPropagation();
      IncrementCount();
      setCartProducts([...cartProducts,productData]);
      open_closeCheckoutSideMenu();
    }

    const renderIcon = (id) =>{

      const isInCart = cartProducts.filter((product) => product.id === id).length > 0;
      if(isInCart){
        return(
              <div className='absolute top-0 right-0 flex justify-center items-center bg-green-500 w-6 h-6 rounded-full m-2 p-1'>
              <CheckCircleIcon className="h-6 w-6 text-white "></CheckCircleIcon> 
              </div>
        );
      }else{
        return(
          <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1' onClick={(event) =>addProductToCart(event,item)}>
          <PlusIcon className="h-6 w-6 text-black"></PlusIcon> 
          </div>
        );
      } 
    }
    return (
      <div className='bg-white cursor-pointer w-56 h-60 rounded-lg' onClick={() =>showProduct(item)}>
        <figure className='relative mb-2 w-full h-4/5'>
          <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{item.category}</span>
          <img className='w-full h-full object-cover rounded-lg' src={item.image} alt={item.title} />
        {renderIcon(item.id)}
        </figure>

        <p className='flex justify-between'>
          <span className='text-sm font-light truncate mr-2'>{item.title}</span>
          <span className='text-lg font-medium'>${item.price}</span>
        </p>
      </div>
    )
  }
  
  export { CardItem }