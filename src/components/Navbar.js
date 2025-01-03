import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  
  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-lg z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="logo flex items-center">
          <img
            src="https://www.lannapoly.ac.th/about/images/logo.gif"
            alt="Logo"
            className="h-12 mr-3"
          />
          <h1 className="text-2xl font-extrabold tracking-wide uppercase">
            Lanna Polytechnic
          </h1>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        {/* Menu Items */}
        <ul
          className={`lg:flex space-x-6 text-lg font-semibold absolute lg:static top-16 left-0 bg-gray-900 lg:bg-transparent w-full lg:w-auto lg:space-x-6 lg:p-0 p-4 ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <li>
            <a
              href="/"
              className="block text-white hover:text-yellow-500"
              onClick={handleLinkClick} // ปิดเมนูเมื่อคลิกลิงก์
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="block text-white hover:text-yellow-500"
              onClick={handleLinkClick} // ปิดเมนูเมื่อคลิกลิงก์
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="/courses"
              className="block text-white hover:text-yellow-500"
              onClick={handleLinkClick} // ปิดเมนูเมื่อคลิกลิงก์
            >
              Courses
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="block text-white hover:text-yellow-500"
              onClick={handleLinkClick} // ปิดเมนูเมื่อคลิกลิงก์
            >
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
