import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const UserTicketList = () => {
  const { userId } = useParams(); // Get the userId from the URL
  const navigate = useNavigate();

  // Sample ticket data (replace with actual data fetching logic)
  const [tickets, setTickets] = useState([
    {
      ticketId: 1,
      scheduledId: 101,
      paymentId: 201,
      bookDate: "2023-10-01",
      seatNo: "A1",
      price: 50,
      status: "Confirmed",
    },
    {
      ticketId: 2,
      scheduledId: 102,
      paymentId: 202,
      bookDate: "2023-10-02",
      seatNo: "B2",
      price: 60,
      status: "Pending",
    },
  ]);

  const handleStatusChange = (ticketId, newStatus) => {
    setTickets(
      tickets.map((ticket) =>
        ticket.ticketId === ticketId ? { ...ticket, status: newStatus } : ticket
      )
    );
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Tickets for User {userId}</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Ticket ID</th>
            <th>Scheduled ID</th>
            <th>Payment ID</th>
            <th>Book Date</th>
            <th>Seat No</th>
            <th>Price</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.ticketId}>
              <td>{ticket.ticketId}</td>
              <td>{ticket.scheduledId}</td>
              <td>{ticket.paymentId}</td>
              <td>{ticket.bookDate}</td>
              <td>{ticket.seatNo}</td>
              <td>${ticket.price}</td>
              <td>
                <select
                  value={ticket.status}
                  onChange={(e) =>
                    handleStatusChange(ticket.ticketId, e.target.value)
                  }
                >
                  <option value="Confirmed">Confirmed</option>
                  <option value="Pending">Pending</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button onClick={() => navigate(-1)} variant="secondary">
        Go Back
      </Button>
    </div>
  );
};

export default UserTicketList;