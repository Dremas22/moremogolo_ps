import Navbar from "../src/components/navabar";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "90px", textAlign: "center" }}>
        <h1 className="text-4xl font-bold mt-10">Contact Page</h1>
        <p>Get in touch with us.</p>
      </div>
    </>
  );
}