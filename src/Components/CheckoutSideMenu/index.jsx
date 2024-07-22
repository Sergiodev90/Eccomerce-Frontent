import { useContext } from "react";
import { Link } from "react-router-dom";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ShoppingCartContext } from "../../context/";
import { OrderCard } from "../OrderCard";
import { totalprice } from "../../utils";
import "./styles.css";

const CheckoutSideMenu = () => {
  const {
    isCheckoutSideMenuOpen,
    open_closeCheckoutSideMenu,
    setCartProducts,
    cartProducts,
    setCount,
    order,
    setOrder,
    DeteleteOrderCard
  } = useContext(ShoppingCartContext);

  const handleCheckout = () => {
    const orderToAdd = {
      date: new Date(),
      products: cartProducts,
      totalProducts: totalprice(cartProducts),
    };
    setOrder([...order, orderToAdd]);
    setCount(0);
    setCartProducts([]);
  };
  
  return (
    isCheckoutSideMenuOpen && (
      <aside className="flex checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white">
        <div className="flex justify-between items-center p-6">
          <h2 className="font-medium text-xl">My Order</h2>
          <div>
            <XMarkIcon
              className="h-6 w-6 text-black cursor-pointer"
              onClick={() => open_closeCheckoutSideMenu()}
            ></XMarkIcon>
          </div>
        </div>
        <div className="px-6 overflow-y-scroll flex-1">
          {cartProducts?.map((product) => (
            <OrderCard
              title={product.title}
              imageURL={product.image}
              price={product.price}
              key={product.id}
              id={product.id}
              DeteleteOrderCard = {DeteleteOrderCard}
            />
          ))}
        </div>
        <div className="px-6 my-6">
          <p className="flex justify-between items-center">
            <span className="font-light">Total: </span>
            <span className="font-medium text-2xl">
              ${totalprice(cartProducts)}
            </span>
          </p>
          <Link to = "/myorders/last">
            <button
              className="w-full py-3 bg-green-400 text-white rounded-lg  "
              onClick={() => handleCheckout()}
            >
              Checkout
            </button>
          </Link>
        </div>
      </aside>
    )
  );
};

export { CheckoutSideMenu };
