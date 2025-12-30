import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function FoodCard({ food }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="bg-white dark:bg-gray-800 rounded shadow hover:shadow-lg transition">
      <img
        src={food.image}
        alt={food.name}
        className="h-40 w-full object-cover rounded-t"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{food.name}</h3>
        <p className="text-sm text-gray-500">{food.category}</p>
        <div className="flex justify-between items-center mt-3">
          <span className="font-bold text-orange-500">₹{food.price}</span>
          <button
            onClick={() => addToCart(food)}
            className="bg-orange-500 text-white px-3 py-1 rounded"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
