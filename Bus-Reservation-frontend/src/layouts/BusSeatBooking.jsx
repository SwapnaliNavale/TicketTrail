// import React, { useState } from "react";
// // import "bootstrap/dist/css/bootstrap.min.css";

// const BusSeatBooking = () => {
//   const rows = 10;
//   const cols = 4;
//   const [selectedSeats, setSelectedSeats] = useState([]);

//   const toggleSeatSelection = (seat) => {
//     setSelectedSeats((prevSelectedSeats) => {
//       if (prevSelectedSeats.includes(seat)) {
//         return prevSelectedSeats.filter((s) => s !== seat);
//       } else {
//         return [...prevSelectedSeats, seat];
//       }
//     });
//   };

//   return (
//     <div className="container mt-4">
//       <div className="row">
//         <div className="col-md-8">
//           <div className="border p-3">
//             <div className="d-flex flex-column align-items-center">
//               <div className="mb-2 text-center">Driver</div>
//               <div className="bus-seat-layout">
//                 {[...Array(rows)].map((_, rowIndex) => (
//                   <div key={rowIndex} className="d-flex justify-content-center mb-2">
//                     {[...Array(cols)].map((_, colIndex) => {
//                       const seat = `R${rowIndex + 1}C${colIndex + 1}`;
//                       return (
//                         <button
//                           key={seat}
//                           className={`btn btn-sm me-2 ${selectedSeats.includes(seat) ? "btn-primary" : "btn-outline-secondary"}`}
//                           onClick={() => toggleSeatSelection(seat)}
//                         >
//                           {seat}
//                         </button>
//                       );
//                     })}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-4">
//           <h5>Selected Seats</h5>
//           <ul>
//             {selectedSeats.map((seat) => (
//               <li key={seat}>{seat}</li>
//             ))}
//           </ul>
//           <h5>Total Fare: ${selectedSeats.length * 10}</h5>
//           <button className="btn btn-success w-100">BOOK</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BusSeatBooking;

// ################################################################################

// import React, { useState } from "react";
// import { Navigate } from "react-router-dom";
// const { busId } = useParams();
// // const {busId} from useParams()
// //api call for a particular bus by id
// const BusSeatBooking = () => {
//   const rows = 9;
//   const cols = 4;
//   const [selectedSeats, setSelectedSeats] = useState([]);

//   const toggleSeatSelection = (seat) => {
//     setSelectedSeats((prevSelectedSeats) => {
//       if (prevSelectedSeats.includes(seat)) {
//         return prevSelectedSeats.filter((s) => s !== seat);
//       } else {
//         return [...prevSelectedSeats, seat];
//       }
//     });
//   };
//   const handleBook = ()=>{
//     Navigate('/payment' ,{state:{TotalFair:selectedSeats.length * 10}})
//   }
//   return (
//     <div className="container mt-4">
//       <div className="row">
//         <div className="col-md-7">
//           <div className="border p-3">
//             <div className="d-flex flex-column align-items-center">
//               <div className="mb-2">Driver</div>
//               <div className="bus-seat-layout">
//                 {[...Array(rows)].map((_, rowIndex) => (
//                   <div key={rowIndex} className="d-flex justify-content-center mb-2">
//                     {[...Array(cols / 2)].map((_, colIndex) => {
//                       const seat = `R${rowIndex + 1}C${colIndex + 1}`;
//                       return (
//                         <button
//                           key={seat}
//                           className={`btn btn-sm me-2 ${selectedSeats.includes(seat) ? "btn-primary" : "btn-outline-secondary"}`}
//                           onClick={() => toggleSeatSelection(seat)}
//                         >
//                           {seat}
//                         </button>
//                       );
//                     })}
//                     <div className="me-4"></div> {/* Empty column space */}
//                     {[...Array(cols / 2)].map((_, colIndex) => {
//                       const seat = `R${rowIndex + 1}C${colIndex + 3}`;
//                       return (
//                         <button
//                           key={seat}
//                           className={`btn btn-sm me-2 ${selectedSeats.includes(seat) ? "btn-primary" : "btn-outline-secondary"}`}
//                           onClick={() => toggleSeatSelection(seat)}
//                         >
//                           {seat}
//                         </button>
//                       );
//                     })}
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-1"></div> {/* Empty column space */}
//         <div className="col-md-4">
//           <h5>Selected Seats</h5>
//           <ul>
//             {selectedSeats.map((seat) => (
//               <li key={seat}>{seat}</li>
//             ))}
//           </ul>
//           <h5>Total Fare: ${selectedSeats.length * 10}</h5>
//           <button
//           onClick={handleBook}
//            className="btn btn-success w-100">BOOK</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BusSeatBooking;

// #######################################################################################

import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const BusSeatBooking = () => {
  const { busId } = useParams();
  const rows = 9;
  const cols = 4;
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [busData, setBusData] = useState(null);

  useEffect(() => {
    const fetchBusDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/buses/${busId}`);
        if (response.status === 200) {
          setBusData(response.data);
        } else {
          console.error("Error fetching bus details:", response.status);
        }
      } catch (error) {
        console.error("Error fetching bus details:", error);
      }
    };

    fetchBusDetails();
  }, [busId]);

  const toggleSeatSelection = (seat) => {
    // Check if the seat is available (you'll need to implement this logic
    // based on your seat availability data, for example, checking against
    // a list of booked seats or a seat layout)

    setSelectedSeats((prevSelectedSeats) => {
      if (prevSelectedSeats.includes(seat)) {
        return prevSelectedSeats.filter((s) => s !== seat);
      } else {
        return [...prevSelectedSeats, seat];
      }
    });
  };

  const handleBook = () => {
    const navigate = useNavigate();
    const totalFare = selectedSeats.length * 500; //(busData?.farePerSeat || 0);

    // Pass all necessary data to the PaymentPage
    navigate("/payment", {
      state: {
        totalFare,
        selectedSeats,
        busId,
        busData,
      },
    });
  };

  return (
    <div className="container mt-4">
      {/* Check if busData is loaded */}
      {busData ? (
        <div className="row">
          <div className="col-md-7">
            <div className="border p-3">
              <div className="d-flex flex-column align-items-center">
                <div className="mb-2">Driver</div>
                <div className="bus-seat-layout">
                  {[...Array(rows)].map((_, rowIndex) => (
                    <div
                      key={rowIndex}
                      className="d-flex justify-content-center mb-2"
                    >
                      {[...Array(cols / 2)].map((_, colIndex) => {
                        const seat = `R${rowIndex + 1}C${colIndex + 1}`;
                        // Check seat availability (implement your logic here)
                        const isSeatAvailable =
                          // Example: Check if seat is available in busData
                          // (replace with your actual logic)
                          !busData.bookedSeats.includes(seat);

                        return (
                          <button
                            key={seat}
                            className={`btn btn-sm me-2 ${
                              selectedSeats.includes(seat)
                                ? "btn-primary"
                                : "btn-outline-secondary"
                            } ${isSeatAvailable ? "" : "disabled"}`}
                            onClick={() =>
                              isSeatAvailable && toggleSeatSelection(seat)
                            }
                            disabled={!isSeatAvailable}
                          >
                            {seat}
                          </button>
                        );
                      })}
                      <div className="me-4"></div>
                      {[...Array(cols / 2)].map((_, colIndex) => {
                        const seat = `R${rowIndex + 1}C${colIndex + 3}`;
                        // Check seat availability (implement your logic here)
                        const isSeatAvailable =
                          // Example: Check if seat is available in busData
                          // (replace with your actual logic)
                          !busData.bookedSeats.includes(seat);

                        return (
                          <button
                            key={seat}
                            className={`btn btn-sm me-2 ${
                              selectedSeats.includes(seat)
                                ? "btn-primary"
                                : "btn-outline-secondary"
                            } ${isSeatAvailable ? "" : "disabled"}`}
                            onClick={() =>
                              isSeatAvailable && toggleSeatSelection(seat)
                            }
                            disabled={!isSeatAvailable}
                          >
                            {seat}
                          </button>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-4">
            <h5>Selected Seats</h5>
            <ul>
              {selectedSeats.map((seat) => (
                <li key={seat}>{seat}</li>
              ))}
            </ul>
            <h5>Total Fare: ${totalFare}</h5>
            <button onClick={handleBook} className="btn btn-success w-100">
              BOOK
            </button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default BusSeatBooking;
