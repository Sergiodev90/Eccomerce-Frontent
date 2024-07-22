import {useContext} from "react";
import { ShoppingCartContext } from "../../context";
import { CardItem } from "../../Components/CardItem";
import { ProductDetail } from "../../Components/ProductDetail";


function Home(){
    const {items} = useContext(ShoppingCartContext)
    return (
        <div>
            <div className="flex items-center justify-center realtive w-80 mb-4">
                <h1 className="font-medium text-xl">Exclusive products</h1>
            </div>
            <input type="text" placeholder="Search a product"
                className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
            />
            <div className="grid gap-8 grid-cols-4 w-full max-w-screen-lg">
            {items?.map((item)=>(
                <CardItem key={item.id} item={item} />
            ))}
            </div>
            <ProductDetail/>
        </div>
    );
}

export {Home}