import Navbar from "../src/components/navabar";
export default function Blog() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "90px", textAlign: "center" }}>
        <h1 className="text-4xl font-bold mt-10">Blog Page</h1>
        <p>Read our latest articles here.</p>
      </div>
    </>
  );
}