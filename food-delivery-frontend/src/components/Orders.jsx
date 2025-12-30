import OrderStatus from "../components/OrderStatus";

export default function Orders() {
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  if (orders.length === 0) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold">No orders yet</h2>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">My Orders</h1>

      {orders.map(order => (
        <div
          key={order.id}
          className="bg-white dark:bg-gray-800 p-4 rounded shadow mb-4"
        >
          <div className="flex justify-between text-sm">
            <span>Order #{order.id}</span>
            <span>{new Date(order.createdAt).toLocaleString()}</span>
          </div>

          <p className="mt-2 font-semibold">₹{order.total}</p>
          <p className="text-sm text-gray-500">Status: {order.status}</p>

          <OrderStatus status={order.status} />
        </div>
      ))}
    </div>
  );
}
