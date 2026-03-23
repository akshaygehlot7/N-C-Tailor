import React from "react";

function Navbar() {
  return (
    <div className="flex items-center justify-between p-5 shadow-md">
      <a href="/">
        <h1 className="text-2xl font-bold">N C Tailor</h1>
      </a>
      <div>
        <a href="/" className="mr-5 text-gray-600 hover:text-gray-900">
          Home
        </a>
        <a href="/design" className="mr-5 text-gray-600 hover:text-gray-900">
          Design
        </a>
        <a href="/services" className="mr-5 text-gray-600 hover:text-gray-900">
          Services
        </a>
        <a href="/contact" className="mr-5 text-gray-600 hover:text-gray-900">
          Contact
        </a>
        <a href="/dashboard" className="text-gray-600 hover:text-gray-900">
          DashBoard
        </a>
      </div>
    </div>
  );
}

export default Navbar;
