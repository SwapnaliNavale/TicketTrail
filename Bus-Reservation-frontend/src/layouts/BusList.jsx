// import React from "react";
// import { Navigate,useLocation } from "react-router-dom";
// // const location = useLocation();
//   // const { buses } = location.state; //map if it an array of objects

// function BusList() {
//   // const busdata = {
//   //   depttime: "23:00",
//   //   deptloc: "Pune",
//   //   arrtime: "5:00",
//   //   arrloc: "Kolhapur",
//   //   busno: "MH09AH0207",
//   //   bustype: "AC",
//   //   timeduration: "6:00",
//   //   fare: "$500",
//   //   seatavaialbility: "50",
//   // };
//   // const {
//   //   depttime,
//   //   deptloc,
//   //   arrtime,
//   //   arrloc,
//   //   busno,
//   //   bustype,
//   //   timeduration,
//   //   fare,
//   //   seatavaialbility,
//   // } = busdata;

//   const onBookNow = (id) => {
//     Navigate(`/BusSeatSelection/${id}`);
//   };
//   return (
//     <div className="container-fluid">
//       {/* Header */}
//       <div className="d-flex justify-content-between align-items-center p-3 border-bottom"></div>
//       {/* Main Content */}
//       <div className="row mt-3">
//         {/* Sidebar Filters */}
//         <div className="col-md-2 border-end p-3">
//           <h5>Filters</h5>
//           <div>
//             <h6>Bus type</h6>
//             <div className="form-check">
//               <input className="form-check-input" type="checkbox" id="ac" />
//               <label className="form-check-label" htmlFor="ac">
//                 AC
//               </label>
//             </div>
//             <div className="form-check">
//               <input className="form-check-input" type="checkbox" id="nonac" />
//               <label className="form-check-label" htmlFor="nonac">
//                 Non AC
//               </label>
//             </div>
//             <div className="form-check">
//               <input
//                 className="form-check-input"
//                 type="checkbox"
//                 id="sleeper"
//               />
//               <label className="form-check-label" htmlFor="sleeper">
//                 Sleeper
//               </label>
//             </div>
//             <div className="form-check">
//               <input
//                 className="form-check-input"
//                 type="checkbox"
//                 id="seating"
//               />
//               <label className="form-check-label" htmlFor="seating">
//                 Seating
//               </label>
//             </div>
//           </div>
//         </div>

//         <div className="col-md-9 p-3">
//           <h5>
//             {buses.schedule.route.source} ➝ {buses.schedule.route.destination}
//           </h5>
//           <div className="border p-3 my-2">
//             <div className="d-flex justify-content-between">
//               <div>
//                 <strong>Bus No : </strong>
//                 {buses.bus_no}
//                 <br />
//                 {/* <br />
//                 <strong>Bus Type : </strong>
//                 {bustype} */}
//               </div>
//               <div>
//                 <br />
//                 <br />
//                 {buses.schedule.departureTime} ➝ {buses.schedule.route.duration} ➝ {buses.schedule.arrivalTime}
//               </div>
//               <div>
//                 <strong>Fare : </strong>
//                 {buses.schedule.route.ticket.price}
//                 <br />
//                 <br />
//                 <strong>Seat Availability : </strong>
//                 {buses.capacity}
//               </div>
//             </div>
//             <div>
//               <button onClick={onBookNow(bus.id)} className="btn btn-success mt-2 ">
//                 Book Now
//               </button>
//             </div>
//           </div>
//           <div className="border p-3 my-2"></div>
//           <div className="border p-3 my-2"></div>
//           <div className="border p-3 my-2"></div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BusList;

// ################################################################


// import React from "react";
// import { useNavigate, useLocation } from "react-router-dom";

// function BusList() {
//   const location = useLocation();
//   const { data } = location.state; 

//   const onBookNow = (busId) => {
//     const navigate = useNavigate(); 
//     navigate(`/BusSeatSelection/${busId}`);
//   };

//   return (
//     <div className="container-fluid">
//       {/* Header */}
//       <div className="d-flex justify-content-between align-items-center p-3 border-bottom"></div>
//       {/* Main Content */}
//       <div className="row mt-3">
//         {/* Sidebar Filters */}
//         <div className="col-md-2 border-end p-3">
//           <h5>Filters</h5>
//           <div>
//             <h6>Bus type</h6>
//             <div className="form-check">
//               <input className="form-check-input" type="checkbox" id="ac" />
//               <label className="form-check-label" htmlFor="ac">
//                 AC
//               </label>
//             </div>
//             {/* Add other filter options as needed */}
//           </div>
//         </div>

//         <div className="col-md-9 p-3">
//           {data.map((bus) => (
//             <div key={bus.id} className="border p-3 my-2">
//               <div className="d-flex justify-content-between">
//                 <div>
//                   <strong>Bus No : </strong>
//                   {bus.bus.busNo} 
//                 </div>
//                 <div>
//                   {bus.departureTime} - {bus.route.duration} - {bus.arrivalTime} 
//                 </div>
//                 <div>
//                   <strong>Fare : </strong> 
//                   {/* Assuming fare is available in the API response */}
//                   {bus.fare} 
//                   <br />
//                   <br />
//                   <strong>Seat Availability : </strong> 
//                   {bus.bus.capacity} 
//                 </div>
//               </div>
//               <div>
//                 <button onClick={() => onBookNow(bus.bus.id)} className="btn btn-success mt-2 ">
//                   Book Now
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BusList;


import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function BusList() {
  const location = useLocation();
  const { buses } = location.state; 

  const navigate = useNavigate(); 

  const onBookNow = (busId) => {
    navigate(`/BusSeatSelection/${busId}`);
  };

  return (
    <div className="container-fluid">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center p-3 border-bottom"></div>
      {/* Main Content */}
      <div className="row mt-3">
        {/* Sidebar Filters */}
        <div className="col-md-2 border-end p-3">
          <h5>Filters</h5>
          <div>
            <h6>Bus type</h6>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="ac" />
              <label className="form-check-label" htmlFor="ac">
                AC
              </label>
            </div>
            {/* Add other filter options as needed */}
          </div>
        </div>

        <div className="col-md-9 p-3">
          {buses && buses.length > 0 ? ( 
            buses.map((bus) => ( 
              <div key={bus.id} className="border p-3 my-2">
                <div className="d-flex justify-content-between">
                  <div>
                    <strong>Bus No : </strong>
                    {bus.bus.busNo} 
                  </div>
                  <div>
                    {bus.departureTime} - {bus.route.duration} - {bus.arrivalTime} 
                  </div>
                  <div>
                    {/* <strong>Fare : </strong> 
                    Assuming fare is available in the API response */}
                    {/* {bus.fare}  */}
                    {/* <br /> */}
                    <br />
                    <strong>Seat Availability : </strong> 
                    {bus.bus.capacity} 
                  </div>
                </div>
                <div>
                  <button onClick={() => onBookNow(bus.bus.id)} className="btn btn-success mt-2 ">
                    Book Now
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No buses found.</p> 
          )}
        </div>
      </div>
    </div>
  );
}

export default BusList;