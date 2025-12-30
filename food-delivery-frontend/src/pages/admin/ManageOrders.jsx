import { useState } from "react";
import toast from "react-hot-toast";

export default function ManageOrders() {
  const [orders, setOrders] = useState(
    JSON.parse(localStorage.getItem("orders")) || []
  );

  const updateStatus = (id, status) => {
    const updated = orders.map(order =>
      order.id === id ? { ...order, status } : order
    );
    setOrders(updated);
    localStorage.setItem("orders", JSON.stringify(updated));
    toast.success("Order updated");
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Manage Orders</h1>

      {orders.map(order => (
        <div
          key={order.id}
          className="bg-white dark:bg-gray-800 p-4 rounded mb-3"
        >
          <p>Order #{order.id}</p>
          <p>Total: ₹{order.total}</p>

          <select
            value={order.status}
            onChange={e => updateStatus(order.id, e.target.value)}
            className="mt-2 border p-2 rounded"
          >
            <option>Ordered</option>
            <option>Preparing</option>
            <option>Delivered</option>
          </select>
        </div>
      ))}
    </div>
  );
}
