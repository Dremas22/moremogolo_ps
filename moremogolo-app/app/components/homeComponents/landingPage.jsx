"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "../navabar";

const images = [
  "/images/morepic1.jpg",
  "/images/morepic2.jpg",
  "/images/morepic3.jpg",
];

const LandingPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="font-sans flex flex-col ">
      <Navbar />

      {/* Slideshow Section */}
      <div className="relative w-full h-100 sm:h-72 md:h-96 lg:h-[500px] overflow-hidden">
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          fill
          priority
          className="object-cover transition-opacity duration-700"
        />
      </div>

      {/* Responsive Image Section */}
      <div className="w-full flex align-center ">
        <Image
          src="/images/bgImage1.png"
          alt="Bg image"
          width={400} // natural width of your image
          height={200} // natural height of your image
          className="w-200 h-100 p-10"
          priority
        />
        <div className="p-10">
          <p>Moremogolo go betlwa wa taola wa motho wa ipetla
            Moremogolo go betlwa wa taola wa motho wa ipetla
            Moremogolo go betlwa wa taola wa motho wa ipetla
            Moremogolo go betlwa wa taola wa motho wa ipetla
            Moremogolo go betlwa wa taola wa motho wa ipetla
            Moremogolo go betlwa wa taola wa motho wa ipetla
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
