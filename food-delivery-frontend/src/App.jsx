import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Orders from "./components/Orders";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/admin/Dashboard";
import AddFood from "./pages/admin/AddFood";
import ManageOrders from "./pages/admin/ManageOrders";

import { useEffect, useState } from "react";
import { testBackendAPI } from "./services/api";

export default function App() {
   const [message, setMessage] = useState("");
    useEffect(() => {
    const fetchData = async () => {
      const data = await testBackendAPI();
      if (data) {
        setMessage(data.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orders" element={<Orders />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute role="admin">
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/add-food"
          element={
            <ProtectedRoute role="admin">
              <AddFood />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/orders"
          element={
            <ProtectedRoute role="admin">
              <ManageOrders />
            </ProtectedRoute>
          }
        />
      </Routes>

       <div style={{ padding: "20px" }}>
      <h1>Food Delivery Project</h1>
      <p>{message}</p>
    </div>
    </>
  );
}
