// import React, { useState } from "react";
// import { Container, Row, Col, Button, Card } from "react-bootstrap";
// // import { FaBus, FaSteeringWheel } from "react-icons/fa";
// import "bootstrap/dist/css/bootstrap.min.css";
// // import "./SeatBooking.css";

// const seatData = [
//   ["1", "2", "", "3", "4"],
//   ["5", "6", "", "7", "8"],
//   ["9", "10", "", "11", "12"],
//   ["13", "14", "", "15", "16"],
//   ["17", "18", "", "19", "20"]
// ];

// const seatPrices = {
//   "1": 10, "2": 10, "3": 15, "4": 15,
//   "5": 12, "6": 12, "7": 10, "8": 10,
//   "9": 14, "10": 14, "11": 13, "12": 13,
//   "13": 10, "14": 10, "15": 12, "16": 12,
//   "17": 15, "18": 15, "19": 14, "20": 14
// };

// const bookedSeats = ["3", "4", "15", "16"];

// const SeatBooking = () => {
//   const [selectedSeats, setSelectedSeats] = useState([]);
  
//   const toggleSeatSelection = (seat) => {
//     if (bookedSeats.includes(seat)) return;
//     setSelectedSeats((prev) =>
//       prev.includes(seat) ? prev.filter((s) => s !== seat) : [...prev, seat]
//     );
//   };

//   const clearSelection = () => setSelectedSeats([]);

//   const totalFare = selectedSeats.reduce((total, seat) => total + seatPrices[seat], 0);

//   return (
//     <Container className="seat-booking">
//       <h4><FaBus /> Bus Seat Selection</h4>
//       <Row>
//         <Col md={8} className="bus-layout">
//           <Card className="bus-card">
//             <div className="steering-wheel"><FaSteeringWheel /></div>
//             {seatData.map((row, rowIndex) => (
//               <div key={rowIndex} className="seat-row">
//                 {row.map((seat, seatIndex) => (
//                   <div
//                     key={seatIndex}
//                     className={`seat ${
//                       bookedSeats.includes(seat) ? "booked" : selectedSeats.includes(seat) ? "selected" : "available"
//                     }`}
//                     onClick={() => toggleSeatSelection(seat)}
//                   >
//                     {seat}
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </Card>
//         </Col>
//         <Col md={4} className="seat-info">
//           <h5>Seat Selection</h5>
//           <div className="legend">
//             <div className="legend-item available"></div> Available
//             <div className="legend-item selected"></div> Selected
//             <div className="legend-item booked"></div> Booked
//           </div>
//           <Button variant="secondary" onClick={clearSelection} className="mt-3">Clear Selection</Button>
//           <div className="selected-seats mt-3">
//             <strong>Seats Selected:</strong> {selectedSeats.join(", ") || "None"}
//           </div>
//           <div className="total-fare mt-2">
//             <strong>Total Fare:</strong> ${totalFare}
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default SeatBooking;


// #########################################


// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// const SeatBooking = () => {
//   const [seats, setSeats] = useState([]);
//   const [selectedSeats, setSelectedSeats] = useState([]);
//   const [totalFare, setTotalFare] = useState(0);

// //   useEffect(() => {
// //     axios.get("/api/seats")
// //       .then(response => {
// //         setSeats(response.data);
// //       })
// //       .catch(error => {
// //         console.error("Error fetching seat data:", error);
// //       });
// //   }, []);

//   const handleSeatClick = (seat) => {
//     if (seat.status === "booked") return;
//     let updatedSelectedSeats = [...selectedSeats];
//     if (updatedSelectedSeats.includes(seat.id)) {
//       updatedSelectedSeats = updatedSelectedSeats.filter(id => id !== seat.id);
//     } else {
//       updatedSelectedSeats.push(seat.id);
//     }
//     setSelectedSeats(updatedSelectedSeats);
//     calculateTotalFare(updatedSelectedSeats);
//   };

//   const calculateTotalFare = (selectedSeats) => {
//     let fare = selectedSeats.reduce((acc, seatId) => {
//       const seat = seats.find(s => s.id === seatId);
//       return acc + (seat ? seat.price : 0);
//     }, 0);
//     setTotalFare(fare);
//   };

//   const handleClearSelection = () => {
//     setSelectedSeats([]);
//     setTotalFare(0);
//   };

//   return (
//     <Container className="mt-4">
//       <Row>
//         <Col md={8} className="text-center">
//           <h4>Bus Seat Selection</h4>
//           <div className="seat-layout">
//             {seats.map((seat) => (
//               <div
//                 key={seat.id}
//                 className={`seat ${seat.status} ${selectedSeats.includes(seat.id) ? "selected" : ""}`}
//                 onClick={() => handleSeatClick(seat)}
//               >
//                 {seat.id}
//               </div>
//             ))}
//           </div>
//         </Col>
//         <Col md={4} className="text-center">
//           <h5>Seat Selection</h5>
//           <div>Available: <span className="seat available"></span></div>
//           <div>Selected: <span className="seat selected"></span></div>
//           <div>Booked: <span className="seat booked"></span></div>
//           <Button variant="danger" className="mt-3" onClick={handleClearSelection}>Clear Selection</Button>
//           <h6 className="mt-3">Seats Selected: {selectedSeats.join(", ")}</h6>
//           <h6>Total Fare: ${totalFare}</h6>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default SeatBooking;



//#################################

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { FaBusAlt, FaChair } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/SeatBooking.css"; 

const SeatBooking = () => {
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalFare, setTotalFare] = useState(0);
  const [userGender, setUserGender] = useState("male"); // Example user gender

  useEffect(() => {
    // Static data for demo purposes
    const staticSeats = [
      { id: 1, status: "available", price: 20, gender: 'female' },
      { id: 2, status: "booked", price: 20, gender: "female" },
      { id: 3, status: "available", price: 20, gender: null },
      { id: 4, status: "booked", price: 20, gender: "male" },
      { id: 5, status: "available", price: 20, gender: null },
      { id: 6, status: "available", price: 20, gender: null },
    ];
    setSeats(staticSeats);
  }, []);

  const handleSeatClick = (seat) => {
    if (seat.status === "booked") return;
    if (!canSelectBeside(seat.id)) return;

    let updatedSelectedSeats = [...selectedSeats];
    if (updatedSelectedSeats.includes(seat.id)) {
      updatedSelectedSeats = updatedSelectedSeats.filter(id => id !== seat.id);
    } else {
      updatedSelectedSeats.push(seat.id);
    }
    setSelectedSeats(updatedSelectedSeats);
    calculateTotalFare(updatedSelectedSeats);
  };

  // const canSelectBeside = (seatId) => {
  //   const seatIndex = seats.findIndex(seat => seat.id === seatId);
  //   const adjacentSeats = [seats[seatIndex - 1], seats[seatIndex + 1]];
  //   return adjacentSeats.every(adjSeat => {
  //     if (adjSeat && adjSeat.gender && adjSeat.gender !== userGender) {
  //       alert("Cannot select beside a seat of different gender.");
  //       return false;
  //     }
  //     return true;
  //   });
  // };

  const calculateTotalFare = (selectedSeats) => {
    let fare = selectedSeats.reduce((acc, seatId) => {
      const seat = seats.find(s => s.id === seatId);
      return acc + (seat ? seat.price : 0);
    }, 0);
    setTotalFare(fare);
  };

  const handleClearSelection = () => {
    setSelectedSeats([]);
    setTotalFare(0);
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col md={8} className="text-center">
          <h4><FaBusAlt /> Bus Seat Selection</h4>
          <Card className="p-3 seat-layout">
            {seats.map((seat) => (
              <div
                key={seat.id}
                className={`seat ${seat.status} ${selectedSeats.includes(seat.id) ? "selected" : ""}`}
                onClick={() => handleSeatClick(seat)}
              >
                <FaChair />
              </div>
            ))}
          </Card>
        </Col>
        <Col md={4} className="text-center">
          <h5>Seat Selection</h5>
          <div><span className="seat available"></span> Available</div>
          <div><span className="seat selected"></span> Selected</div>
          <div><span className="seat booked"></span> Booked</div>
          <Button variant="danger" className="mt-3" onClick={handleClearSelection}>Clear Selection</Button>
          <h6 className="mt-3">Seats Selected: {selectedSeats.join(", ")}</h6>
          <h6>Total Fare: ${totalFare}</h6>
        </Col>
      </Row>
    </Container>
  );
};

export default SeatBooking;
