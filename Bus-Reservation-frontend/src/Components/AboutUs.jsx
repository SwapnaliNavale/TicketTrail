import React, { useEffect, useRef } from "react";
import { Container, Card, Carousel, Button } from "react-bootstrap";
import MyNavbar from "../Components/MyNavbar";
import Footer from "./Footer";

const AboutUs = () => {
  return (
    <>
      <MyNavbar />
      <Container className="mt-5 d-flex flex-column align-items-center justify-content-center min-vh-100">
        <Card className="shadow-lg p-4 text-center w-75">
          <h1 className="text-primary fw-bold mb-3">About Us</h1>
          <p className="fs-5">
            Welcome to <strong>BusEase</strong>, your reliable travel partner! 🚍
          </p>
          <p className="text-muted">
            Our mission is to provide a seamless, hassle-free, and efficient bus
            booking experience. We connect cities, people, and opportunities with
            a safe and comfortable journey.
          </p>

          <h2 className="text-dark fw-semibold mt-4">Why Choose Us?</h2>

          {/* React Bootstrap Carousel */}
          <Carousel className="w-75 mx-auto" interval={2000}>
            <Carousel.Item className="text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/128/3757/3757773.png"
                alt="Booking"
                className="d-block mx-auto"
                height="100"
              />
              <p className="mt-3 fs-5">✅ Easy online bus booking</p>
            </Carousel.Item>
            <Carousel.Item className="text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/128/1012/1012603.png"
                alt="Safety"
                className="d-block mx-auto"
                height="100"
              />
              <p className="mt-3 fs-5">✅ Safe and reliable journeys</p>
            </Carousel.Item>
            <Carousel.Item className="text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/128/1625/1625106.png"
                alt="Affordable"
                className="d-block mx-auto"
                height="100"
              />
              <p className="mt-3 fs-5">✅ Affordable pricing</p>
            </Carousel.Item>
            <Carousel.Item className="text-center">
              <img
                src="https://cdn-icons-png.flaticon.com/128/1598/1598326.png"
                alt="Support"
                className="d-block mx-auto"
                height="100"
              />
              <p className="mt-3 fs-5">✅ 24/7 customer support</p>
            </Carousel.Item>
          </Carousel>

          <h2 className="text-dark fw-semibold mt-4">Contact Us 📞</h2>
          <p className="text-muted">
            📍 <strong>Address:</strong> 123, Travel Street, Pune, India<br />
            📧 <strong>Email:</strong> support@tickettrail.com <br />
            ☎ <strong>Phone:</strong> +123-456-7890
          </p>
        </Card>
      </Container>
      <Footer/>
    </>
  );
};

export default AboutUs;
