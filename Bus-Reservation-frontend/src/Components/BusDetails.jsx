import React from "react";

const BusDetails = ({ bus, onBookNow }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px", borderRadius: "5px" }}>
      <h3>{bus.name}</h3>
      <p>Departure: {bus.departure}</p>
      <p>Arrival: {bus.arrival}</p>
      <p>Price: ₹{bus.price}</p>
      <button onClick={() => onBookNow(bus.id)}>Book Now</button>
    </div>
  );
};

export default BusDetails;