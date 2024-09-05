import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Approach from "./components/Approach";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import DropDown from "./components/DropDown";

const App = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Approach />
      <Featured />
      <Footer />
    </>
  );
};

export default App;
