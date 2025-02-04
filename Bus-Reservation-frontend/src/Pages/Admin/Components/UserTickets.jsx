import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const UserTickets = () => {
  const { userId } = useParams();
  const [tickets, setTickets] = useState([
    { id: 1, seat_no: "A1", price: 500, is_booked: true },
    { id: 2, seat_no: "B3", price: 450, is_booked: false },
    { id: 3, seat_no: "C5", price: 600, is_booked: true },
    // Add more sample tickets here
  ]);

//   useEffect(() => {
//     const fetchUserTickets = async () => {
//       try {
//         const response = await fetch(`/api/users/${userId}/tickets`); 
//         if (!response.ok) {
//           throw new Error('Failed to fetch user tickets');
//         }
//         const data = await response.json();
//         setTickets(data);
//       } catch (error) {
//         console.error("Error fetching user tickets:", error);
//         // Handle error (e.g., display an error message to the user)
//       }
//     };

//     fetchUserTickets();
//   }, [userId]); // Include userId in dependency array

  return (
    <div className="p-4">
      <h3>User Tickets</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Ticket ID</th>
            <th>Seat No</th>
            <th>Price</th>
            <th>Booking Status</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.id}>
              <td>{ticket.id}</td>
              <td>{ticket.seat_no}</td>
              <td>${ticket.price}</td>
              <td>{ticket.is_booked ? "Booked" : "Not Booked"}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UserTickets;