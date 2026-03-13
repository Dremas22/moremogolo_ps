"use client";
import React from "react";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-white text-black mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-6">

        {/* Education Logo */}
        <div className="mb-6 md:mb-0">
          <Image
            src="/images/education-logo.png"
            alt="Education Logo"
            width={150}
            height={150}
          />
        </div>

        {/* Facebook Section */}
        <div className="flex flex-col items-center text-center">
          <p className="text-lg mb-2">
            Follow our school on Facebook
          </p>

          <a
            href="https://web.facebook.com/search/top?q=moremogolo%20primary%20school"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-400 text-4xl transition"
          >
            <FaFacebook />
          </a>
        </div>

        {/* Footer Text */}
        <div className="text-center md:text-right mt-4 md:mt-0">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Moremogolo Primary School
          </p>
          <p className="text-sm">All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}
