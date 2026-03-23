import React from "react";
import axios from "axios";
import { useState } from "react";

function AddProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState(null);

  const submit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", name);
    formData.append("price", price);
    formData.append("image", image);

    await axios.post("http://localhost:5000/api/add-product", formData);

    alert("Product Added");
  };
  return (
    <div className="container">

<h2>Add Product</h2>

<form onSubmit={submit}>

<input
type="text"
placeholder="Product Name"
onChange={(e)=>setName(e.target.value)}
/>

<input
type="number"
placeholder="Price"
onChange={(e)=>setPrice(e.target.value)}
/>

<input
type="file"
onChange={(e)=>setImage(e.target.files[0])}
/>

<button type="submit">Add Product</button>

</form>

</div>
  );
} 

export default AddProduct;
