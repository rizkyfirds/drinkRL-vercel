import React from "react";
import "./App.css";
import "./index.css";
import Navbar from "./components/navbar/Navbar";
import Section1 from "./components/section1/Section1";
import Section2 from "./components/section2/Section2";
import Product from "./components/product/Product";
import Available from "./components/available/Available";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="h-screen px-7 bg-black overflow-y-auto font-thunder">
      <div className="h-14">
        <Navbar />
      </div>
      <div className="h-1/2 md:h-3/4">
        <Section1 />
      </div>
      <div className="my-8 h-1/4 md:h-4/5">
        <Section2 />
      </div>
      <div className="h-fit my-8">
        <Product />
      </div>
      <div className="h-fit my-8">
        <Available />
      </div>
      <div className="h-1/4 md:h-1/3 mt-14">
        <Footer />
      </div>
    </div>
  );
}

export default App;
