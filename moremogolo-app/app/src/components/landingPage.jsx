"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "./navabar";

const images = [
  "/images/morepic1.jpg",
  "/images/morepic2.jpg",
  "/images/morepic3.jpg",
];

const LandingPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showLoader, setShowLoader] = useState(false);
  const [pageReady, setPageReady] = useState(false);

  // Slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  // Loader logic
  useEffect(() => {
    const loaderTimer = setTimeout(() => {
      if (!pageReady) {
        setShowLoader(true);
      }
    }, 400); // only show loader if page takes longer than 400ms

    const readyTimer = setTimeout(() => {
      setPageReady(true);
      setShowLoader(false);
    }, 800); // simulate page ready

    return () => {
      clearTimeout(loaderTimer);
      clearTimeout(readyTimer);
    };
  }, [pageReady]);

  if (showLoader && !pageReady) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-white text-xl font-semibold">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="font-sans flex flex-col">
      <Navbar />

      {/* Slideshow */}
      <div className="relative w-full -mt-3 h-100 sm:h-72 md:h-96 lg:h-[500px] overflow-hidden">
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          fill
          priority
          className="object-cover transition-opacity duration-700"
        />
      </div>

      {/* Vision & Mission */}
      <div className="py-20 px-6 grid md:grid-cols-2 gap-10 max-w-5xl mx-auto items-stretch">

        <div className="bg-white text-gray-800 rounded-xl shadow-lg p-10 text-center flex flex-col justify-center h-full transform transition duration-700 hover:scale-105">
          <h2 className="text-4xl font-bold mb-6 text-blue-600">
            Our Vision
          </h2>
          <p className="text-lg">
            Investing in ICT integrated inclusive education and sport
            development.
          </p>
        </div>

        <div className="bg-white text-gray-800 rounded-xl shadow-lg p-10 text-center flex flex-col justify-center h-full transform transition duration-700 hover:scale-105">
          <h2 className="text-4xl font-bold mb-6 text-blue-600">
            Our Mission
          </h2>
          <p className="text-lg">
            Provide quality education for best learner achievement through
            qualified educators who can incorporate ICT in education, sports
            and culture, and with parental involvement in a democratic
            environment.
          </p>
        </div>

      </div>

      {/* Quote */}
      <div className="w-full flex flex-col items-center justify-center pt-16 px-6 py-16 text-center">
        <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl leading-snug">
          Moremogolo go betlwa wa taola wa motho wa ipetla.
        </p>
      </div>
    </div>
  );
};

export default LandingPage;