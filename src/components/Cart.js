import { useSelector, useDispatch } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log("cartItems", cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <div className="text-center p-2 m-2 font-bold text-3xl">Cart</div>
      <div>
        {cartItems.length == 0 && (
          <h1 className="text-center p-2 m-2 text-xl">Cart is Empty</h1>
        )}
        {cartItems.length > 0 && (
          <>
            <h1 className="text-center p-2 m-2 text-2xl font-bold">
              Cart Items
            </h1>
            <div className="flex flex-col items-center">
              <div>
                <button
                  className=" bg-black text-white p-2 m-2 rounded-lg shadow-lg"
                  onClick={handleClearCart}
                >
                  Clear Cart
                </button>
              </div>
              <ItemList items={cartItems} />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
