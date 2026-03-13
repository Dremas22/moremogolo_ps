"use client";

import { useEffect, useState } from "react";

export default function Contact() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      <div className="bg-gray-100 -mt-3 text-center px-6 pt-[50px] pb-10">
        <h1 className="text-5xl text-black font-bold mb-10">
          Contact Our School
        </h1>

        <p className="text-xl mb-12 max-w-2xl mx-auto text-black">
          If you would like more information about our school, programs, or
          learner admissions, please contact our school leadership below.
        </p>

        {/* Contact Cards */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Deputy */}
          <div
            className={`bg-gray-800 text-white p-8 rounded-xl shadow-lg transform transition-all duration-700 hover:scale-105
            ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-3xl font-bold mb-4">Deputy Principal</h2>
            <p className="text-xl mb-2">Mom Sefora</p>
            <p className="text-lg text-gray-300">📞 082 492 4019</p>
          </div>

          {/* Principal */}
          <div
            className={`bg-gray-800 text-white p-8 rounded-xl shadow-lg transform transition-all duration-700 hover:scale-105
            ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-3xl font-bold mb-4">Principal</h2>
            <p className="text-xl mb-2">Job Kaira</p>
            <p className="text-lg text-gray-300">📞 079 871 5075</p>
          </div>
        </div>
      </div>
    </>
  );
}
