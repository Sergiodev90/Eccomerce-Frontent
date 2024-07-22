import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import { OrderCard } from "../../Components/OrderCard";
import { Link } from "react-router-dom";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

const Myorder = () => {
  const { order } = useContext(ShoppingCartContext);
  console.log("From my order o my order/last", order);
  const currentPath = window.location.pathname
  let   index = currentPath.substring(currentPath.lastIndexOf('/') + 1)
  if (index === 'last') index = order?.length - 1

  return (
    <div>
      <div className="flex items-center w-80 relative justify-center mb-6">
        <Link to="/my-orders" className="absolute left-0">
          <ChevronLeftIcon className="h-6 w-6  text-black cursor-pointer" />
        </Link>
        <h1>My Order</h1>
      </div>
      <div className="flex flex-col w-80">
      {order?.[index]?.products.map((product) => (
        <OrderCard
          title={product.title}
          imageURL={product.image}
          price={product.price}
          key={product.id}
          id={product.id}
        />
      ))}
      </div>
    </div>
  );
};

export { Myorder };
