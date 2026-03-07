import Navbar from "../src/components/navabar";

export default function About() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "90px", textAlign: "center" }}>
        <h1 className="text-4xl font-bold mt-10">About Page</h1>
        <p>Learn more about us on this page.</p>
      </div>
    </>
  );
}