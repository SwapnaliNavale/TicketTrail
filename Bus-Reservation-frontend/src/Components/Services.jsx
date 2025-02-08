import React from 'react';
import { Table } from 'react-bootstrap';
import Footer from './Footer';
import MyNavbar from './MyNavbar';

const Services = () => {
  return (
    <>
    <MyNavbar/>
    <div style={{ fontWeight: "bold", paddingTop: '150px'}} className="container   text-center"> 
      <h2 className="mb-4">Why Choose Us?</h2>
      <div className="row justify-content-center"> 
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Affordable Prices</h5>
              <p className="card-text">
                We offer competitive pricing and frequent discounts to make travel accessible to everyone.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Wide Range of Routes</h5>
              <p className="card-text">
                We connect you to a vast network of destinations, making it easy to travel to your desired location.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">Comfortable Travel</h5>
              <p className="card-text">
                Enjoy a comfortable and safe journey with our well-maintained fleet of buses.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5"> 
        <h2 className="mb-4">Our Commitment</h2>
        <p>
          We are dedicated to providing you with the best possible travel experience. 
          Our team is committed to customer satisfaction and ensuring your journey is safe, comfortable, and enjoyable.
        </p>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Services;