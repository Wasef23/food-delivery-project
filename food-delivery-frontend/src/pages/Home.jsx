import { useState } from "react";
import foods from "../data/foods";
import FoodCard from "../components/FoodCard";

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", ...new Set(foods.map(f => f.category))];

  const filteredFoods = foods.filter(food => {
    const matchName = food.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = category === "All" || food.category === category;
    return matchName && matchCategory;
  });

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Order Food</h1>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search food..."
          className="border p-2 rounded w-full md:w-1/2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-2 rounded w-full md:w-1/4"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map(cat => (
            <option key={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredFoods.map(food => (
          <FoodCard key={food._id} food={food} />
        ))}
      </div>
    </div>
  );
}
