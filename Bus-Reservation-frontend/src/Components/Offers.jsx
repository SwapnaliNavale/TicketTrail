import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../css/offers.css";

import image2 from "../assets/offer2.png";
import image1 from "../assets/offer1.png";
import image3 from "../assets/offer3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import MyNavbar from "./MyNavbar";

const Offers = () => {
  const offersData = [
    {
      title: "FIRST",
      image: image1, // Replace with actual image path
      description: "Save up to Rs 250 on bus tickets",
      code: "FIRST",
    },
    {
      title: "BUS300",
      image: image2, // Replace with actual image path
      description: "Save up to Rs 300 on bus tickets",
      code: "BUS300",
    },
    {
      title: "CASH300",
      image: image3, // Replace with actual image path
      description: "Save up to Rs 300 on Karnataka, Tamil Nadu, Kerala routes",
      code: "CASH300",
    },
    {
      title: "SUPERHIT",
      image: image1, // Replace with actual image path
      description: "Save up to Rs 300 on AP, TS routes",
      code: "SUPERHIT",
    },
    {
      title: "APSRTCNEW",
      image: image2, // Replace with actual image path
      description: "Save up to Rs 250 on APSRTC bus tickets",
      code: "APSRTCNEW",
    },
    {
      title: "CHARTERED50",
      image: image4, // Replace with actual image path
      description: "Get 10% Up to Rs 50 Discount on UPSRTC",
      code: "CHARTERED50",
    },
    {
      title: "SBNEW",
      image: image5, // Replace with actual image path
      description: "Save 20% up to Rs 100 on SBSTC bus tickets",
      code: "SBNEW",
    },
    {
      title: "UPSRTC",
      image: image1, // Replace with actual image path
      description: "Save Up to Rs 250 on UPSRTC bus tickets",
      code: "UPSRTC",
    },
    {
      title: "UP50",
      image: image3, // Replace with actual image path
      description: "Get 10% Up to Rs 50 Discount on UPSRTC",
      code: "UP50",
    },
  ];

  // Function to copy the promo code to the clipboard
  const handleCopy = (promoCode) => {
    navigator.clipboard
      .writeText(promoCode)
      .then(() => alert(`Promo code "${promoCode}" copied to clipboard!`))
      .catch((err) => console.error("Error copying promo code: ", err));
  };

  return (
    <>
      <MyNavbar />
      <section className="mt-5">
        <Container>
          <h2 className="text-center mb-5 text-white">Offers</h2>
          <Row>
            {offersData.map((offer, index) => (
              <Col key={index} md={4} className="mb-4">
                <Card className="offer-card text-center shadow rounded h-100">
                  <Card.Img
                    variant="top"
                    src={offer.image}
                    alt={offer.title}
                    className="offer-card-img"
                  />
                  <Card.Body className="p-3">
                    <Card.Title>{offer.title}</Card.Title>
                    <Card.Text>{offer.description}</Card.Text>
                    <div className="promo-code d-flex justify-content-between align-items-center mt-3">
                      <span className="promo-text text-primary fw-bold">
                        {offer.code}
                      </span>
                      <Button
                        variant="outline-primary"
                        size="sm"
                        onClick={() => handleCopy(offer.code)}
                      >
                        Copy
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Offers;
