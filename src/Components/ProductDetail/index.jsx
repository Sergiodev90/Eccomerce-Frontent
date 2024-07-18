import { XMarkIcon } from "@heroicons/react/16/solid";
import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import "./ProductDetail.css"

const ProductDetail = () =>{
    const {isProductDetailOpen, closeProductDetail , productToShow} = useContext(ShoppingCartContext)
    console.log("PRODUCT TO SHOW", productToShow)

    return (
        isProductDetailOpen &&(
        <aside className="product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white ">
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">Details</h2>
                <div>
                    <XMarkIcon className="h-6 w-6 text-black cursor-pointer" onClick={closeProductDetail}></XMarkIcon>
                </div>
            </div>

            <figure className="px-6">
                <img className="w-full h-full rounded-lg" 
                src={productToShow.image} 
                alt={productToShow.title} />
            </figure>
            <p className="flex flex-col p-6">
                <span className="font-medium text-2xl">{productToShow.price}</span>
                <span className="font-medium text-md">{productToShow.title}</span>
                <span className="font-light text-sm">{productToShow.description}</span>
            </p>
        </aside>
        )
    );

}
export {ProductDetail}

