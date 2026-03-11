import Navbar from "../src/components/navabar";

export default function Contact() {
  return (
    <>
      <div className=" min-h-screen text-white text-center px-6 pt-[120px]">

        <h1 className="text-5xl font-bold mb-10">Contact Our School</h1>

        <p className="text-xl mb-12 max-w-2xl mx-auto text-gray-300">
          If you would like more information about our school, programs, or
          learner admissions, please contact our school leadership below.
        </p>

        {/* Contact Cards */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">

          {/* Deputy */}
          <div className="bg-gray-900 p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Deputy Principal</h2>
            <p className="text-xl mb-2">Mom Sefora</p>
            <p className="text-lg text-gray-300">📞 082 492 4019</p>
          </div>

          {/* Principal */}
          <div className="bg-gray-900 p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold mb-4">Principal</h2>
            <p className="text-xl mb-2">Job Kaira</p>
            <p className="text-lg text-gray-300">📞 079 871 5075</p>
          </div>

        </div>

      </div>
    </>
  );
}