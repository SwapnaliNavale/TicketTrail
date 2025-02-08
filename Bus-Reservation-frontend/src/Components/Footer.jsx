import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4">
      <Container>
        <Row className="text-center">
          {/* Column 1 - Branding */}
          <Col md={4} className="mb-3">
            <h5 className="fw-bold">🎟 TicketTrail</h5>
            <p>Your Reliable Travel Partner</p>
          </Col>

          {/* Column 2 - Quick Links */}
          <Col md={4} className="mb-3">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/services" className="text-light text-decoration-none">Services</a></li>
              <li><a href="/about" className="text-light text-decoration-none">About Us</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </Col>

          {/* Column 3 - Contact Info */}
          <Col md={4} className="mb-3">
            <h5 className="fw-bold">Contact Us</h5>
            <p>📍 123 Travel Street, Pune, India</p>
            <p>📧 support@tickettrail.com</p>
            <p>☎ +123-456-7890</p>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <Row className="text-center mt-3">
          <Col>
            <p className="mb-0">&copy; {new Date().getFullYear()} TicketTrail. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;