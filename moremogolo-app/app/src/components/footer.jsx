"use client";
import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-white text-black py-6 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        
        {/* Education Logo */}
        <div className="mb-4 md:mb-0">
          <Image
            src="/images/education-logo.png"
            alt="Education Logo"
            width={150}
            height={150}
            className="inline-block"
          />
        </div>

        {/* Footer Text */}
        <div className="text-center md:text-right">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Moremogolo Primary School
          </p>
          <p className="text-sm">All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}