import React, { useState, useEffect } from 'react';
import { Table, Button, Form, Modal } from 'react-bootstrap';
// import { getTickets, updateTicketStatus } from '../services/ticketService'; 
// Assuming you have this service

const ManageTickets = () => {
  const [tickets, setTickets] = useState([]);
  const [selectedTicketId, setSelectedTicketId] = useState(null);
  const [status, setStatus] = useState('');
  const [showStatusModal, setShowStatusModal] = useState(false);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const fetchedTickets = await getTickets();
        setTickets(fetchedTickets);
      } catch (error) {
        console.error("Error fetching tickets:", error);
      }
    };

    fetchTickets();
  }, []);

  const handleStatusChange = (ticketId) => {
    setSelectedTicketId(ticketId);
    setShowStatusModal(true);
  };

  const handleStatusUpdate = async () => {
    try {
      await updateTicketStatus(selectedTicketId, status);
      // Fetch updated tickets after status update
      const updatedTickets = await getTickets();
      setTickets(updatedTickets);
      setShowStatusModal(false);
      setStatus(''); 
    } catch (error) {
      console.error("Error updating ticket status:", error);
      // Handle error (e.g., display an error message)
    }
  };

  return (
    <div>
      <h2>Manage Tickets</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Ticket ID</th>
            <th>User</th> 
            <th>Status</th> 
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket) => (
            <tr key={ticket.id}>
              <td>{ticket.id}</td>
              <td>{/* Display user name or ID here */}</td> 
              <td>{ticket.status}</td> 
              <td>
                <Button variant="primary" size="sm" onClick={() => handleStatusChange(ticket.id)}>
                  Update Status
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showStatusModal} onHide={() => setShowStatusModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update Ticket Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Select 
            aria-label="Select Status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">Select Status</option>
            <option value="open">Open</option>
            <option value="in_progress">In Progress</option>
            <option value="closed">Closed</option>
            {/* Add more status options as needed */}
          </Form.Select>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowStatusModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleStatusUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ManageTickets;