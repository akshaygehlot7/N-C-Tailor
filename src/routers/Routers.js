import React from "react";
import { Route, Routes } from "react-router-dom";
import SideBar from "../dashboard/SideBar";
import AddProduct from "../admin/AddProduct";
import ProductList from "../admin/ProductList";
import EditProduct from "../admin/EditProduct";
import Contact from "../components/Contact";
import Gallery from "../components/Gallery";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import Footer from "../components/Footer";
import Featured from "../components/Featured";
import Services from "../components/Services";
import Hero from "../components/Hero";
import Design from "../Pages/Design";
// import Services from "../components/Services"; 

function Routers() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/dashboard" element={<SideBar />} />
        <Route path="/featured" element={<Featured />} />
        <Route path="/addproduct" element={<AddProduct />} />
        <Route path="/productslist" element={<ProductList />} />
        <Route path="/edit-product/:id" element={<EditProduct />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/design" element={<Design />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Hero />
      <Featured />grid gap-8 md:grid-cols-3
      <Services />
      <Gallery /> */}
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default Routers;
