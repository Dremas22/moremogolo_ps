"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["Home", "About", "Contact", "Services", "Blog"];

  return (
    <div className="w-full bg-white shadow-md fixed top-0 z-50 px-4">
      {/* Logo + Navigation */}
      <div className="flex justify-between items-center h-30 bg-[#ffc300] w-full">
        {/* Logo - Far Left */}
        <div className="text-xl font-bold text-gray-800 ml-5">
          <Image
            src="/images/moremogoloLogo.png"
            alt="Logo"
            width={200}
            height={200}
            className="inline-block mt-30"
          />
          
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 mr-50 ">
          {navItems.map((item, index) => (
            <span
              key={index}
              className="text-2xl font-semibold text-gray-700 hover:text-blue-500 cursor-pointer transition-colors"
            >
              {item}
            </span>
          ))}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden flex flex-col space-y-4 py-4">
          {navItems.map((item, index) => (
            <span
              key={index}
              className="text-lg font-semibold text-gray-700 hover:text-blue-500 cursor-pointer transition-colors"
            >
              {item}
            </span>
          ))}
        </nav>
      )}
    </div>
  );
};

export default Navbar;
