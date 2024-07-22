import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartContext } from "../../context";
import { OrdersCard } from "../../Components/OrdersCard"



const Myorders = () => {
    const { order } = useContext(ShoppingCartContext)
    console.log("From my orders", order)
    return (
        <div>
            <div className="flex items-center justify-center relative w-80">
                <h1 className="font-medium text-xl">My orders</h1>
            </div>
            {
                order?.map((order,index)=>(
                <Link key = {index} to = {`/my-orders/${index}`}>
                <OrdersCard

                    totalPrice = {order.totalPrice}
                    totalProducts = {order.totalProducts}
                
                />
                </Link>
                
            ))
            }
        </div>
    );
}

export {Myorders}




