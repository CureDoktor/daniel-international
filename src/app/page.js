import Academy from "./components/Academy";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      {" "}
      <Navbar />
      <div className=" max-w-7xl px-3 md:px-0  items-center pb-20  m-auto">
        <Academy />
      </div>
      <Footer />
    </div>
  );
}
