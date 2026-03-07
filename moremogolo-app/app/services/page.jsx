import Navbar from "../src/components/navabar";

export default function Services() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "90px", textAlign: "center" }}>
        <h1 className="text-4xl font-bold mt-10">Services Page</h1>
        <p>Check out the services we offer.</p>
      </div>
    </>
  );
}