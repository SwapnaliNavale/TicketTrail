import React from "react";
import { Navigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

function BusBooking(){
 const busdata = {
     depttime : "23:00",
     deptloc : "Pune",
     arrtime : "5:00",
     arrloc : "Kolhapur",
     busno : "MH09AH0207",
     bustype : "AC",
     timeduration : "6:00",
     fare : "$500",
     seatavaialbility : "50",
 }
const{depttime,deptloc,arrtime,arrloc,busno,bustype,timeduration,fare, seatavaialbility} = busdata;

const onBookNow=()=>{
    Navigate('/BusSeatSelection')
};
  return (
    <div className="container-fluid">
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
        {/* <div className="fw-bold fs-4">Logo</div> */}
        {/* <div>
          <a href="#" className="me-3">Home</a>
          <a href="#" className="me-3">Login</a>
          <a href="#">Signup</a>
        </div> */}
      </div>

      {/* Main Content */}
      <div className="row mt-3">
        {/* Sidebar Filters */}
        <div className="col-md-2 border-end p-3">
          <h5>Filters</h5>
          <div>
            <h6>Bus type</h6>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="ac" />
              <label className="form-check-label" htmlFor="ac">AC</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="nonac" />
              <label className="form-check-label" htmlFor="nonac">Non AC</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="sleeper" />
              <label className="form-check-label" htmlFor="sleeper">Sleeper</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="seating" />
              <label className="form-check-label" htmlFor="seating">Seating</label>
            </div>
          </div>
        </div>

      
        <div className="col-md-9 p-3">
          <h5>{deptloc} ➝ {arrloc}</h5>
          <div className="border p-3 my-2">
            <div className="d-flex justify-content-between">
              <div>
                <strong>Bus No : </strong>
                {busno}
                <br/>
                <br/>
                <strong>Bus Type : </strong>
                {bustype}
              </div>
              <div>
                <br/>
                <br/>
                {depttime} ➝ {timeduration} ➝ {arrtime}
              </div>
              <div>
                <strong>Fare : </strong>
                {fare}
                <br/>
                <br/>
                <strong>Seat Availability : </strong>
                {seatavaialbility}
              </div>
            </div>
            <div>
              <button onClick={onBookNow} className='btn btn-success mt-2 '>
                 Book Now
              </button>
              </div>
          </div>
          <div className="border p-3 my-2"></div>
          <div className="border p-3 my-2"></div>
          <div className="border p-3 my-2"></div>
        </div>
      </div>
    </div>
  );
}


export default BusBooking;
