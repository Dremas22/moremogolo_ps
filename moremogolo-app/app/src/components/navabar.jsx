"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Each item has a name and a path
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="w-full bg-white shadow-md fixed top-0 z-50">
      {/* Main Navbar */}
      <div className="flex items-center justify-between bg-[#ffc300] px-4 h-20">
        
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/images/moremogoloLogo.png"
              alt="Logo"
              width={90} // smaller to fit navbar
              height={90}
              className="cursor-pointer"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex flex-1 justify-center space-x-8">
          {navItems.map((item) => (
            <Link key={item.name} href={item.path}>
              <span className="text-2xl font-semibold text-gray-700 hover:text-blue-500 cursor-pointer transition-colors">
                {item.name}
              </span>
            </Link>
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
        <nav className="md:hidden flex flex-col space-y-4 py-4 items-center bg-white shadow-md">
          {navItems.map((item) => (
            <Link key={item.name} href={item.path}>
              <span
                onClick={() => setIsOpen(false)} // close menu on click
                className="text-lg font-semibold text-gray-700 hover:text-blue-500 cursor-pointer transition-colors"
              >
                {item.name}
              </span>
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
};

export default Navbar;