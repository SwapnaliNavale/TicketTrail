import { useState } from "react";
import { toast } from "react-toastify";

function TicketBooking() {
  const ticketDetails = {
    passengerName: "Sanket",
    bookDate: "2025-02-12",
    seatNo: "A12",
    price: "$500",
    boardingPoint: "Pune",
    droppingPoint: "Kolhapur",
  };
  const {
    passengerName,
    bookDate,
    seatNo,
    price,
    boardingPoint,
    droppingPoint,
  } = ticketDetails;
  return (
    <div>
      <div className="container mt-5 ">
        <div className="row">
          <h2 className="text-center mb-4">Ticket Details</h2>
          <div className="col-3"></div>
          <div className="col-6 p-4 h-100 shadow">
            <div className="row">
              <div className="col">
                <div className="mb-4">
                  <strong>Passenger Name : </strong>
                  {passengerName}
                </div>
              </div>
              <div className="col">
                <div className="mb-4">
                  <strong>Booking date : </strong>
                  {bookDate}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                {/* <div className="mb-4">
                  <strong>Bus Name : </strong>
                  {busName}
                </div> */}
              </div>
              <div className="col">
                <div className="mb-4">
                  <strong>Seat No : </strong>
                  {seatNo}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="mb-4">
                  <strong>Boarding Point : </strong>
                  {boardingPoint}
                </div>
              </div>
              <div className="col">
                <div className="mb-4">
                  <strong>Dropping Point : </strong>
                  {droppingPoint}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="mb-4">
                  <strong>Price : </strong>
                  {price}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TicketBooking;
