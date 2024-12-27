import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-lg z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo and Menu */}
        <div className="logo flex items-center">
          <img src="https://www.lannapoly.ac.th/about/images/logo.gif" alt="Logo" className="h-12 mr-3" />
          <h1 className="text-2xl font-extrabold tracking-wide uppercase">Lanna Polytechnic</h1>
        </div>
        <ul className="flex space-x-6 text-lg font-semibold">
          {/* Menu Items */}
          <li><a href="/" className="text-white hover:text-yellow-500">Home</a></li>
          <li><a href="/about" className="text-white hover:text-yellow-500">About Us</a></li>
          <li><a href="/courses" className="text-white hover:text-yellow-500">Courses</a></li>
          <li><a href="/contact" className="text-white hover:text-yellow-500">Contact Us</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
