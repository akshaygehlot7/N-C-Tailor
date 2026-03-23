import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Design() {
    const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    "All",
    "Designer Blouse",
    "Party Wear Dress",
    "Fancy Kurti",
  ];

  // 1. Fetch products from your backend
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get("https://n-c-full-stack.onrender.com/api/products");
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  // 2. Logic to filter products based on clicked category
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);
  return (
    <section className="p-10 bg-gray-50" id="designs">
      <h2 className="mb-6 text-center text-3xl font-bold">Featured Designs</h2>

      {/* CATEGORY FILTER BUTTONS */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${
              selectedCategory === cat
                ? "bg-indigo-600 text-white shadow-lg"
                : "bg-white text-gray-600 hover:bg-indigo-100 border"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* FILTERED PRODUCTS GRID */}
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((item) => (
            <div
              key={item._id}
              className="group overflow-hidden rounded-xl bg-white shadow-md transition-transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <span className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                  {item.category}
                </span>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
                <p className="text-indigo-600 font-semibold mt-1">
                  ₹{item.price}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500 py-10">
            No products found in this category.
          </p>
        )}
      </div>
    </section>
  )
}

export default Design