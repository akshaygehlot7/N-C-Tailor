import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function EditProduct() {
  const { id } = useParams();

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:5000/api/product/${id}`).then((res) => {
      setName(res.data.name);
      setPrice(res.data.price);
    });
  }, [id]);

  const updateProduct = async (e) => {
    e.preventDefault();

    await axios.put(`http://localhost:5000/api/product/${id}`, {
      name,
      price,
    });

    alert("Product Updated");
  };
  return (
    <div className="container">
      <h2>Edit Product</h2>

      <form onSubmit={updateProduct}>
        <input value={name} onChange={(e) => setName(e.target.value)} />

        <input value={price} onChange={(e) => setPrice(e.target.value)} />

        <button>Update Product</button>
      </form>
    </div>
  );
}

export default EditProduct;
