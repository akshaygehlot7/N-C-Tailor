import axios from "axios";
import React, { useEffect, useState } from "react";

function Gallery() {
  const [products, setProducts] = useState([]);

  //fetch all poducts and display in gallery format
  const API_URL = "https://n-c-full-stack.onrender.com/api/products";
  const fetchProducts = async () => {
    const res = await axios.get(API_URL);
    setProducts(res.data);
    console.log(res.data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  const images = new Array(3).fill(
    "https://styleunion.in/cdn/shop/files/EPT00107OFFWHITE_1.jpg?v=1771844995&width=713",
  );
  return (
    <section className="p-10">
      <h2 className="mb-8 text-center text-3xl font-bold">Gallery</h2>

      <div className="mb-10 grid gap-6 md:grid-cols-3">
        {images.map((img, i) => (
          <img key={i} src={img} className="rounded shadow" />
        ))}
      </div>

      {/* PRODUCT LIST - Responsive Cards */}
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product._id}
            className="group overflow-hidden rounded-xl bg-white shadow-md transition-transform hover:-translate-y-2"
          >
            <div className="relative h-64 overflow-hidden">
            <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover transition-transform group-hover:scale-110"
             />
             <span className="absolute left-2 top-2 rounded bg-black/50 px-2 py-1 text-xs text-white">
                {product.category}
              </span>
            </div>
            {/* <div className="mt-4 flex justify-between"> */}
            <div className="p-4 text-center">
              <h2 className="text-lg font-bold text-gray-800">{product.name}</h2>
              <h2 className="text-xl font-semibold">{product.description}</h2>
            <p className="mt-1 font-semibold text-indigo-600">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
