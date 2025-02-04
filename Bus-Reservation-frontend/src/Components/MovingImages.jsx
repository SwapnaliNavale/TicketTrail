import React from 'react';
import { Card } from 'react-bootstrap';
import Image1 from '../assets/image1.png';
import Image2 from '../assets/image2.png';
import Image3 from '../assets/image3.png';
import Image4 from '../assets/image44.png';
import Image5 from '../assets/image55.png';
import '../css/WhyChooseUs.css'; // Import your CSS file

const WhyChooseUs = () => {
  const features = [
    {
      image: Image1,
      title: 'Easy Booking',
      description: 'Book tickets effortlessly with our user-friendly interface.',
    },
    {
      image: Image2,
      title: 'Best Prices',
      description: 'Find the best deals and discounts on bus tickets.',
    },
    {
      image: Image3,
      title: 'Reliable Service',
      description: 'Enjoy a comfortable and reliable journey with our trusted partners.',
    },
    {
      image: Image4,
      title: '24/7 Support',
      description: 'Get assistance anytime, anywhere with our dedicated support team.',
    },
    {
      image: Image5,
      title: 'Secure Payments',
      description: 'Make secure online payments with our trusted payment gateways.',
    },
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Why Choose Us?</h2>
        <div className="d-flex justify-content-center">
          {features.map((feature, index) => (
            <Card key={index} style={{ width: '18rem', marginRight: '10px' }}> 
              <Card.Img variant="top" src={feature.image} />
              <Card.Body>
                <Card.Title>{feature.title}</Card.Title>
                <Card.Text>{feature.description}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;