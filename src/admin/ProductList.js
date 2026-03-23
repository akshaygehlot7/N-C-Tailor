import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ProductList() {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/api/products")
  //     .then((res) => setProducts(res.data));
  // }, []);

  // const deleteProduct = async (id) => {
  //   await axios.delete(`http://localhost:5000/api/product/${id}`);

  //   setProducts(products.filter((p) => p._id !== id));
  // };
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data));
  }, []);

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:5000/api/product/${id}`);

    setProducts(products.filter((p) => p._id !== id));
  };
  return (
    <div className="dashboard">
      <h2>Product List</h2>

      {products.map((product) => (
        <div className="product-card" key={product._id}>
          <img src={product.image} alt="product" />

          <div className="product-info">
            <h3>{product.name}</h3>

            <p>₹ {product.price}</p>
          </div>

          <div className="actions">
            <Link to={`/edit-product/${product._id}`}>
              <button>Edit</button>
            </Link>

            <button onClick={() => deleteProduct(product._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
