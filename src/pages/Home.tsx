import React from "react";
import Hero from "../components/Hero";
import AssociatedCompanies from "../components/AssociatedCompanies";
import Overview from "../components/Overview";
import Capabilities from "../components/Capabilities";
import ProductRange from "../components/ProductRange";
import SkidPortfolio from "../components/SkidPortfolio";
import JointVentures from "../components/JointVentures";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <AssociatedCompanies />
      <Overview />
      <Capabilities />
      <ProductRange />
      <SkidPortfolio />
      <JointVentures />
      <Contact />
    </>
  );
}
