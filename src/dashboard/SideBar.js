import axios from "axios";
import React, { useEffect, useState } from "react";
import { Trash2, Edit, PlusCircle, RefreshCw } from "lucide-react";

function SideBar() {
  const [products, setProducts] = useState([]);
  const [editingId, setEditingId] = useState(null); // Tracks if we are editing
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    category: "Party Wear Dress",
    image: null,
  });

  const API_URL = "https://n-c-full-stack.onrender.com/api";
  // 1. Fetch All Products
  const fetchProducts = async () => {
    const res = await axios.get(`${API_URL}/products`);
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // 1. Fill form with product data to edit
  const startEdit = (product) => {
    setEditingId(product._id);
    setFormData({
      name: product.name,
      price: product.price,
      description: product.description,
      category: product.category, // anil
      image: null, // Keep null unless user picks a NEW image
    });
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to form
  };

  // 2. Add/Submit Product (Handles both add and update Form-Data for Images)
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", formData.name);
    data.append("price", formData.price);
    data.append("category", formData.category);
    data.append("description", formData.description);
    if (formData.image) data.append("image", formData.image);
    // data.append("image", formData.image);

    try {
      if (editingId) {
        // UPDATE API CALL
        await axios.put(`${API_URL}/product/${editingId}`, data);
        alert("Product Updated!");
      } else {
        // ADD API CALL
        await axios.post(`${API_URL}/addproduct`, data);
        alert("Product Added!");
      }

      // Reset Form and Refresh
      setEditingId(null);
      setFormData({ name: "", price: "", description: "", image: null });
      fetchProducts();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this product?")) {
      await axios.delete(`${API_URL}/product/${id}`);
      fetchProducts();
    }
  };

  //   await axios.post(`${API_URL}/addproduct`, data);
  //   fetchProducts(); // Refresh list
  // };

  // 3. Delete Product
  // const handleDelete = async (id) => {
  //   if (window.confirm("Delete this product?")) {
  //     await axios.delete(`${API_URL}/product/${id}`);
  //     fetchProducts();
  //   }
  // };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-10">
      <h1 className="mb-6 text-2xl font-bold flex justify-center">
        Product Management
      </h1>
      {/* <h1 className="mb-6 text-xl font-bold">ADD PRODUCT</h1> */}

      {/* FORM HEADER CHANGES BASED ON STATE */}
      <h2 className="mb-4 text-xl font-bold text-blue-600 flex justify-center">
        {editingId ? "EDIT PRODUCT" : "ADD PRODUCT"}
      </h2>
      {/* ADD PRODUCT FORM - Responsive Grid */}
      <form
        onSubmit={handleSubmit}
        className="mb-10 grid grid-cols-1 gap-4 rounded bg-white p-6 shadow md:grid-cols-2"
      >
        <input
          type="text"
          placeholder="Name"
          value={formData.name} // IMPORTANT: Controlled input
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full rounded border p-2"
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={formData.price} // IMPORTANT: Controlled input
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
          className="w-full rounded border p-2"
          required
        />
        <select
          value={formData.category}
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
          className="w-full rounded border p-2 bg-white"
          required
        >
          <option value="Party Wear Dress">Party Wear Dress</option>
          <option value="Fancy Kurti">Fancy Kurti</option>
          <option value="Designer Blouse">Designer Blouse</option>
        </select>
        <input
          type="file"
          onChange={(e) =>
            setFormData({ ...formData, image: e.target.files[0] })
          }
          className="w-full"
        />
        <textarea
          placeholder="Description"
          value={formData.description} // IMPORTANT: Controlled input
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
          className="w-full rounded border p-2 md:col-span-2"
        />

        {/* <button
          type="submit"
          className="flex items-center justify-center gap-2 rounded bg-blue-600 p-2 text-white hover:bg-blue-700"
        >
          <PlusCircle size={20} /> Add Product
        </button> */}
        <button
          type="submit"
          className={`flex items-center justify-center gap-2 rounded p-2 text-white ${editingId ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"}`}
        >
          {editingId ? (
            <>
              <RefreshCw size={20} /> Update Product
            </>
          ) : (
            <>
              <PlusCircle size={20} /> Add Product
            </>
          )}
        </button>

        {editingId && (
          <button
            type="button"
            onClick={() => {
              setEditingId(null);
              setFormData({
                name: "",
                price: "",
                description: "",
                category: "",
                image: null,
              });
            }}
            className="bg-gray-400 text-white p-2 rounded"
          >
            Cancel Edit
          </button>
        )}
      </form>

      {/* PRODUCT LIST - Responsive Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div
            key={product._id}
            className="overflow-hidden rounded-lg bg-white p-4 shadow-md"
          >
            <img
              src={product.image}
              alt={product.name}
              className="mb-4 h-48 w-full rounded object-cover"
            />
            <div className="mt-4 flex justify-between">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <h2 className="text-xl font-semibold">{product.description}</h2>
            </div>
            <p className="text-gray-600">${product.price}</p>
            <div className="mt-2">
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                {product.category}
              </span>
            </div>
            <div className="mt-4 flex justify-between">
              {/* <button className="flex items-center gap-1 text-yellow-500 hover:text-yellow-600">
                <Edit size={18} /> Edit
              </button> */}
              {/* ATTACH START EDIT FUNCTION */}
              <button
                onClick={() => startEdit(product)}
                className="flex items-center gap-1 text-yellow-500 hover:text-yellow-600 font-medium"
              >
                <Edit size={18} /> Edit
              </button>
              <button
                onClick={() => handleDelete(product._id)}
                className="flex items-center gap-1 text-red-500 hover:text-red-600"
              >
                <Trash2 size={18} /> Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideBar;
