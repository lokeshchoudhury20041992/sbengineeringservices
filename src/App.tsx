import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Overview from "./components/Overview";
import Capabilities from "./components/Capabilities";
import ProductRange from "./components/ProductRange";
import SkidPortfolio from "./components/SkidPortfolio";
import JointVentures from "./components/JointVentures";
import Leadership from "./components/Leadership";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#FCFAF7] min-h-screen text-[#1A1A1A] selection:bg-brand-yellow selection:text-brand-dark font-sans antialiased">
      <Navbar />
      <Hero />
      <Overview />
      <Capabilities />
      <ProductRange />
      <SkidPortfolio />
      <JointVentures />
      <Leadership />
      <Contact />
      <Footer />
    </div>
  );
}
