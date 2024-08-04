import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    console.log(cartItems)

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    return (
        <div className="w-6/12 mx-auto py-12">
            <div className="font-bold mb-8 text-center">
                <div className="font-bold text-2xl mb-2">Cart 
                    <span className="text-rose-600 ml-1">({cartItems.length})</span>
                </div>
            </div>
            {cartItems.length != 0 ? (
                <div>
                    <div className="bg-cyan-50 mb-4 pl-4 pr-3 shadow-md py-3">
                        <ItemList items={cartItems} />
                    </div>
                    <div className="flex justify-between gap-4 font-semibold mt-11">
                        <button onClick={handleClearCart} className="flex-1 border hover:border-rose-500 hover:text-rose-500 border-rose-600 text-rose-600 px-3 py-2 rounded-sm">
                            Clear Cart
                        </button>
                        <button className="flex-1 bg-rose-600 hover:bg-rose-500 text-white px-3 py-2 rounded-sm">
                            Place Order
                        </button>
                    </div>
                </div>
            ) : (
                <div className="text-slate-600 text-lg text-center">Cart is empty. Please add items to cart.</div>
            )}
        </div>
    )
}

export default Cart;