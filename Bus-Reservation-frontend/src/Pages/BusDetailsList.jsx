
import React from "react";
import BusDetails from "../Components/BusDetails";


const BusDetailsList = ({ buses, handleBookNow }) => {
  return (
    <div>
      {buses.map((bus) => (
        <BusDetails key={bus.id} bus={bus} onBookNow={handleBookNow} />
      ))}
    </div>
  );
};

export default BusDetailsList;

