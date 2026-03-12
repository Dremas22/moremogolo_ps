"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/images/morepic1.jpg",
  "/images/morepic2.jpg",
  "/images/morepic3.jpg",
];

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center px-6 py-16">

      {/* Carousel */}
      <div className="relative w-full max-w-5xl h-64 md:h-96 overflow-hidden rounded-xl shadow-lg mb-16">
        <Image
          src={images[currentIndex]}
          alt="School activity"
          fill
          className="object-cover transition-opacity duration-700"
          priority
        />
      </div>

      {/* About Content */}
      <div className="max-w-4xl w-full flex flex-col gap-10">

        {/* About Card */}
        <div className="bg-white text-gray-800 p-10 rounded-xl shadow-lg text-center hover:scale-105 transition duration-500">
          <h1 className="text-5xl font-bold mb-6 text-blue-600">
            About Our School
          </h1>

          <p className="text-xl leading-relaxed">
            Our school is dedicated to providing quality education that prepares
            learners for the future through innovation, ICT integration, sports,
            and cultural development.
          </p>
        </div>

        {/* Mission Card */}
        <div className="bg-white text-gray-800 p-10 rounded-xl shadow-lg text-center hover:scale-105 transition duration-500">
          <h2 className="text-4xl font-bold mb-6 text-blue-600">
            Our Commitment
          </h2>

          <p className="text-xl leading-relaxed">
            We strive to create an inclusive environment where learners are
            encouraged to grow academically, socially, and physically while
            developing confidence, leadership, and a passion for lifelong
            learning.
          </p>
        </div>

      </div>
    </div>
  );
}