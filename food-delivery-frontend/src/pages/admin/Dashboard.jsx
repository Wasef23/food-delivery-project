export default function Dashboard() {
  const foods = JSON.parse(localStorage.getItem("adminFoods")) || [];
  const orders = JSON.parse(localStorage.getItem("orders")) || [];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
          <h3>Total Foods</h3>
          <p className="text-2xl font-bold">{foods.length}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
          <h3>Total Orders</h3>
          <p className="text-2xl font-bold">{orders.length}</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
          <h3>Status</h3>
          <p className="text-green-500 font-semibold">System Active</p>
        </div>
      </div>
    </div>
  );
}
