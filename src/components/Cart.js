import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    console.log("Cart Items from Redux Store:", cartItems);

    const dispatch = useDispatch();

    const handleClerCart = () => {
        dispatch(clearCart())
    }

    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className="w-6/12 m-auto shadow-lg">
                <button className="m-2 p-2 bg-black text-white rounded-lg" onClick={handleClerCart}>clear cart</button>
                {cartItems && cartItems.length > 0 ? (
                    <ItemList items={cartItems} />
                ) : (
                    <p className="text-gray-500">Your cart is empty.</p>
                )}
            </div>
        </div>
    );
};

export default Cart;
