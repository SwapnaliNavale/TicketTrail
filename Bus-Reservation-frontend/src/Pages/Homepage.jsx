import React from "react";
import MyNavbar from "../Components/MyNavbar";
import HeroSection from "../Components/HeroSection";

import { useNavigate  } from "react-router-dom";
import { useEffect } from "react";

import Footer from "../Components/Footer";
import WhyChooseUs from "../Components/WhyChooseUs";


const Homepage = () => {
  const navigate = useNavigate()
  useEffect(() => {
    if(!localStorage.getItem('token'))
    navigate('/login')
  }, []);

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
