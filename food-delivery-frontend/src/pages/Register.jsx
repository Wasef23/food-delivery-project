export default function Register() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white dark:bg-gray-800 p-6 rounded shadow w-96">
        <h2 className="text-xl font-bold mb-4">Register</h2>
        <input className="w-full mb-3 p-2 border rounded" placeholder="Name" />
        <input className="w-full mb-3 p-2 border rounded" placeholder="Email" />
        <input className="w-full mb-3 p-2 border rounded" placeholder="Phone" />
        <input className="w-full mb-3 p-2 border rounded" placeholder="Password" />
        <button className="w-full bg-orange-500 text-white py-2 rounded">
          Register
        </button>
      </div>
    </div>
  );
}
