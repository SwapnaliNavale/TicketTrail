
// import React, { useState, useEffect } from "react";
// import { Form, Button, Table } from "react-bootstrap";
// import { useParams, useNavigate } from "react-router-dom";
// // import UserTickets from "./UserTickets";
// // import TicketBooking from "../../TicketBooking";

// const EditUserDetails = () => {
//     const { userId } = useParams();
//     console.log("Received userId:", userId);
//     const navigate = useNavigate();
//     const [user, setUser] = useState(null);
//     const [tickets, setTickets] = useState([]);
//     const [showTickets, setShowTickets] = useState(false);

//     useEffect(() => {
//         fetchUserDetails();
//         fetchUserTickets();
//     }, []);

//     const fetchUserDetails = async () => {
//         // Replace with actual API call
//         const response = await fetch(`/api/users/${userId}`);
//         const data = await response.json();
//         setUser(data);
//     };

//     const fetchUserTickets = async () => {
//         // Replace with actual API call
//         const response = await fetch(`/api/tickets?user_id=${userId}`);
//         const data = await response.json();
//         setTickets(data);
//     };

//     const handleInputChange = (e) => {
//         setUser({ ...user, [e.target.name]: e.target.value });
//     };

//     const handleUpdateUser = async () => {
//         // Replace with actual API call
//         await fetch(`/api/users/${userId}`, {
//             method: "PATCH",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(user),
//         });
//         navigate("/admin/users");
//     };

//     const handleUpdateBookingStatus = async (ticketId, newStatus) => {
//         // Replace with actual API call
//         await fetch(`/api/tickets/${ticketId}`, {
//             method: "PATCH",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ is_booked: newStatus }),
//         });
//         fetchUserTickets();
//     };

//     if (!user) return <p>Loading...</p>;

//     return (
//         <div className="p-4">
//             <h2>Edit User Details</h2>
//             <Form>
//                 <Form.Group>
//                     <Form.Label>First Name</Form.Label>
//                     <Form.Control type="text" name="first_name" value={user.first_name} onChange={handleInputChange} />
//                 </Form.Group>
//                 <Form.Group>
//                     <Form.Label>Last Name</Form.Label>
//                     <Form.Control type="text" name="last_name" value={user.last_name} onChange={handleInputChange} />
//                 </Form.Group>
//                 <Form.Group>
//                     <Form.Label>Age</Form.Label>
//                     <Form.Control type="number" name="age" value={user.age} onChange={handleInputChange} />
//                 </Form.Group>
//                 <Form.Group>
//                     <Form.Label>Mobile No</Form.Label>
//                     <Form.Control type="text" name="mobile_no" value={user.mobile_no} onChange={handleInputChange} />
//                 </Form.Group>
//                 <Button variant="primary" onClick={handleUpdateUser} className="mt-3">Update User</Button>
//             </Form>
//             <h3 className="mt-4">User Tickets</h3>
//             <Table striped bordered hover>
//                 <thead>
//                     <tr>
//                         <th>Ticket ID</th>
//                         <th>Seat No</th>
//                         <th>Price</th>
//                         <th>Booking Status</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {tickets.map((ticket) => (
//                         <tr key={ticket.id}>
//                             <td>{ticket.id}</td>
//                             <td>{ticket.seat_no}</td>
//                             <td>${ticket.price}</td>
//                             <td>{ticket.is_booked ? "Booked" : "Not Booked"}</td>
//                             <td>
//                                 <Button onClick={() => handleUpdateBookingStatus(ticket.id, !ticket.is_booked)}>
//                                     {ticket.is_booked ? "Cancel Booking" : "Confirm Booking"}
//                                 </Button>
//                                 <Button variant="info" className="ms-2" onClick={() => setShowTickets(true)}>
//                                     Show Tickets
//                                 </Button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </Table>
//             {showTickets && <UserTickets userId={userId} />}
//         </div>
//     );
// };

// export default EditUserDetails;

import React, { useState, useEffect } from "react";
import { Form, Button, Table } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

const EditUserDetails = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState( {
    id: 1,
    first_name: "John",
    last_name: "Doe",
    email: "john@example.com",
    role: "user",
  });

  // useEffect(() => {
  //   const fetchUserDetails = async () => {
  //     try {
  //       const response = await fetch(`/users/${userId}`);
  //       if (!response.ok) {
  //         throw new Error('Failed to fetch user details');
  //       }
  //       const data = await response.json();
  //       setUser(data);
  //     } catch (error) {
  //       console.error("Error fetching user details:", error);
  //       // Handle error (e.g., display an error message to the user)
  //     }
  //   };

  //   fetchUserDetails();
  // }, [userId]); // Include userId in dependency array

  const handleInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleUpdateUser = async () => {
    try {
      const response = await fetch(`/users/${userId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      if (!response.ok) {
        throw new Error('Failed to update user details');
      }

      // Handle successful update (e.g., display success message)
      navigate("/admin/users"); 
    } catch (error) {
      console.error("Error updating user details:", error);
      // Handle error (e.g., display an error message to the user)
    }
  };

  if (!user) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h2>Edit User Details</h2>
      <Form>
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control 
            type="text" 
            name="first_name" 
            value={user.first_name} 
            onChange={handleInputChange} 
            disabled 
          />
        </Form.Group>
        {/* ... other editable fields */}
        <Button variant="primary" onClick={handleUpdateUser} className="mt-3">
          Update User
        </Button>
      </Form>

      {/* Assuming 'tickets' is included in the user object from the API response */}
      <h3>User Tickets</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Ticket ID</th>
            <th>Seat No</th>
            <th>Price</th>
            <th>Booking Status</th>
            {/* <th>Actions</th> - Removed Actions column */}
          </tr>
        </thead>
        <tbody>
          {user.tickets && user.tickets.map((ticket) => ( 
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

export default EditUserDetails;