import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import ProductCard from '../components/ProductCard';

function Products() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        let url = 'https://n-c-full-stack.onrender.com/api/products';
        if (category) {
          url = `https://n-c-full-stack.onrender.com/api/products/category/${encodeURIComponent(category)}`;
        }
        const response = await axios.get(url);
        setProducts(response.data);
      } catch (err) {
        setError('Failed to fetch products');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [category]);

  if (loading) return <div className="text-center p-10">Loading...</div>;
  if (error) return <div className="text-center p-10 text-red-500">{error}</div>;

  return (
    <div className="p-10">
      <h1 className="mb-10 text-center text-3xl font-bold">
        {category ? `${category} Products` : 'All Products'}
      </h1>
      {products.length === 0 ? (
        <p className="text-center">No products found.</p>
      ) : (
        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Products;