import { useContext } from "react";
import { ShoppingCartContext } from "../../context";
import { OrderCard } from "../../Components/OrderCard";


const Myorder = () => {

    const {order} = useContext(ShoppingCartContext)
    console.log(order)
  return (
    <div>
      {order?.slice(-1)[0].products.map((product) => (
        <OrderCard
          title={product.title}
          imageURL={product.image}
          price={product.price}
          key={product.id}
          id={product.id}
        />
      ))}
    </div>
  );
};

export { Myorder };
