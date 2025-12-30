import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const placeOrder = () => {
    if (!address.trim()) {
      toast.error("Please enter delivery address");
      return;
    }

    const order = {
      id: Date.now(),
      items: cart,
      address,
      total,
      status: "Ordered",
      createdAt: new Date().toISOString()
    };

    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    localStorage.setItem("orders", JSON.stringify([...orders, order]));

    clearCart();
    toast.success("Order placed successfully");
    navigate("/orders");
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      <textarea
        placeholder="Delivery Address"
        className="w-full border p-3 rounded mb-4"
        rows="4"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />

      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
        <h2 className="font-semibold mb-2">Order Summary</h2>
        {cart.map(item => (
          <div key={item._id} className="flex justify-between text-sm mb-1">
            <span>{item.name} x {item.qty}</span>
            <span>₹{item.price * item.qty}</span>
          </div>
        ))}
        <hr className="my-2" />
        <p className="font-bold text-right">Total: ₹{total}</p>
      </div>

      <button
        onClick={placeOrder}
        className="mt-4 w-full bg-orange-500 text-white py-2 rounded"
      >
        Place Order
      </button>
    </div>
  );
}
