import { useState } from "react";
import toast from "react-hot-toast";

export default function AddFood() {
  const [food, setFood] = useState({
    name: "",
    price: "",
    category: "",
    image: ""
  });

  const saveFood = () => {
    if (!food.name || !food.price) {
      toast.error("Fill all fields");
      return;
    }

    const foods = JSON.parse(localStorage.getItem("adminFoods")) || [];
    foods.push({ ...food, _id: Date.now() });
    localStorage.setItem("adminFoods", JSON.stringify(foods));

    toast.success("Food added");
    setFood({ name: "", price: "", category: "", image: "" });
  };

  return (
    <div className="p-6 max-w-md">
      <h2 className="text-xl font-bold mb-4">Add Food</h2>

      {["name", "price", "category", "image"].map(field => (
        <input
          key={field}
          placeholder={field}
          value={food[field]}
          onChange={e => setFood({ ...food, [field]: e.target.value })}
          className="w-full mb-3 p-2 border rounded"
        />
      ))}

      <button
        onClick={saveFood}
        className="w-full bg-orange-500 text-white py-2 rounded"
      >
        Save Food
      </button>
    </div>
  );
}
