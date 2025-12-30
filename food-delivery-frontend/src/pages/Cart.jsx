import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeFromCart, updateQty } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (cart.length === 0) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold">Cart is empty</h2>
        <Link to="/" className="text-orange-500 underline">
          Go back to food
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

      {cart.map(item => (
        <div
          key={item._id}
          className="flex justify-between items-center bg-white dark:bg-gray-800 p-4 rounded mb-3"
        >
          <div>
            <h3 className="font-semibold">{item.name}</h3>
            <p className="text-sm text-gray-500">₹{item.price}</p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => updateQty(item._id, item.qty - 1)}
              disabled={item.qty === 1}
              className="px-2 bg-gray-300 rounded"
            >
              -
            </button>
            <span>{item.qty}</span>
            <button
              onClick={() => updateQty(item._id, item.qty + 1)}
              className="px-2 bg-gray-300 rounded"
            >
              +
            </button>
          </div>

          <button
            onClick={() => removeFromCart(item._id)}
            className="text-red-500"
          >
            Remove
          </button>
        </div>
      ))}

      <div className="text-right mt-4">
        <h2 className="text-xl font-bold">Total: ₹{total}</h2>
        <Link
          to="/checkout"
          className="inline-block mt-3 bg-orange-500 text-white px-6 py-2 rounded"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
}
