"use client";
import React from "react";

const Navbar = () => {
  const navItems = ["Home", "About", "Contact", "Services", "Blog"];

  return (
    <nav className="bg-white shadow-md">
      <ul className="flex justify-center items-center space-x-6 py-4">
        {navItems.map((item, index) => (
          <li
            key={index}
            className="text-lg font-semibold text-gray-700 hover:text-blue-500 cursor-pointer transition-colors"
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
