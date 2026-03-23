import React from "react";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>Admin Dashboard</h2>

      <div className="dashboard-buttons">
        <Link to="/add-product">
          <button>Add Product</button>
        </Link>

        <Link to="/products-list">
          <button>Manage Products</button>
        </Link> 
      </div>
    </div>
  );
}

export default Dashboard;
