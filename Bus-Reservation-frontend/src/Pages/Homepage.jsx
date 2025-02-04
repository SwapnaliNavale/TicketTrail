import React from "react";
import MyNavbar from "../Components/MyNavbar";
import HeroSection from "../Components/HeroSection";
import Footer from "../Components/Footer";
import WhyChooseUs from "../Components/MovingImages";

const Homepage = () => {
  return (
    <>
      <MyNavbar />
      <HeroSection />
      <WhyChooseUs/>
      <Footer/>
    </>
  );
};

export default Homepage;
