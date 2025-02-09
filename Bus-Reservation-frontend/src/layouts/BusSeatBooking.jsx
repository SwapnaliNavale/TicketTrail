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

import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

const BusSeatBooking = () => {
  const rows = 9;
  const cols = 4;
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeatSelection = (seat) => {
    setSelectedSeats((prevSelectedSeats) => {
      if (prevSelectedSeats.includes(seat)) {
        return prevSelectedSeats.filter((s) => s !== seat);
      } else {
        return [...prevSelectedSeats, seat];
      }
    });
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-7">
          <div className="border p-3">
            <div className="d-flex flex-column align-items-center">
              <div className="mb-2">Driver</div>
              <div className="bus-seat-layout">
                {[...Array(rows)].map((_, rowIndex) => (
                  <div key={rowIndex} className="d-flex justify-content-center mb-2">
                    {[...Array(cols / 2)].map((_, colIndex) => {
                      const seat = `R${rowIndex + 1}C${colIndex + 1}`;
                      return (
                        <button
                          key={seat}
                          className={`btn btn-sm me-2 ${selectedSeats.includes(seat) ? "btn-primary" : "btn-outline-secondary"}`}
                          onClick={() => toggleSeatSelection(seat)}
                        >
                          {seat}
                        </button>
                      );
                    })}
                    <div className="me-4"></div> {/* Empty column space */}
                    {[...Array(cols / 2)].map((_, colIndex) => {
                      const seat = `R${rowIndex + 1}C${colIndex + 3}`;
                      return (
                        <button
                          key={seat}
                          className={`btn btn-sm me-2 ${selectedSeats.includes(seat) ? "btn-primary" : "btn-outline-secondary"}`}
                          onClick={() => toggleSeatSelection(seat)}
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
        <div className="col-md-1"></div> {/* Empty column space */}
        <div className="col-md-4">
          <h5>Selected Seats</h5>
          <ul>
            {selectedSeats.map((seat) => (
              <li key={seat}>{seat}</li>
            ))}
          </ul>
          <h5>Total Fare: ${selectedSeats.length * 10}</h5>
          <button className="btn btn-success w-100">BOOK</button>
        </div>
      </div>
    </div>
  );
};

export default BusSeatBooking;
