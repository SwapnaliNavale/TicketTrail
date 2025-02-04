import React from "react";
import { useNavigate } from "react-router-dom";
import BusDetailsList from "./BusDetailsList";

const BusListPage = () => {
  const navigate = useNavigate();

  const buses = [
    { id: 1, name: "Red Express", departure: "10:00 AM", arrival: "2:00 PM", price: 500 },
    { id: 2, name: "Blue Line", departure: "1:00 PM", arrival: "6:00 PM", price: 600 },
  ];

  const handleBookNow = (busId) => {
    // navigate(`/select-seat/${busId}`);
    navigate('/select-seat');
  };

  return <BusDetailsList buses={buses} handleBookNow={handleBookNow} />;
};

export default BusListPage;
