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

  // Auto slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="font-sans flex flex-col">
      <Navbar />

      {/* Slideshow Section */}
      <div className="relative w-full -mt-3 h-100 sm:h-72 md:h-96 lg:h-[500px] overflow-hidden">
        <Image
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          fill
          priority
          className="object-cover transition-opacity duration-700"
        />
      </div>

{/* Vision & Mission Section */}
<div className="py-16 px-6 text-center text-white">

  <h2 className="text-5xl font-bold mb-8">Our Vision</h2>
  <p className="text-2xl max-w-4xl mx-auto mb-16">
    Investing in ICT integrated inclusive education and sport development.
  </p>

  <h2 className="text-5xl font-bold mb-8">Our Mission</h2>
  <p className="text-2xl max-w-4xl mx-auto">
    Provide quality education for best learner achievement through qualified
    educators who can incorporate ICT in education, sports and culture, and
    with prenatal involvement in a democratic environment.
  </p>

</div>

      {/* Responsive Image Section */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center pt-10 px-6 py-10">
        <Image
          src="/images/bgImage1.png"
          alt="Background image"
          width={400}
          height={200}
          className="mb-6 md:mb-0 md:mr-10"
          priority
        />
        <div className="max-w-xl text-center md:text-left text-white">
          <p className="text-lg font-semibold">
             Moremogolo go betlwa wa taola wa motho wa ipetla.  
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;