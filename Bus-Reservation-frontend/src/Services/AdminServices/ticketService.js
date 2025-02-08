export const getTickets = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/tickets'); // Replace with your actual API endpoint
      if (!response.ok) {
        throw new Error('Failed to fetch tickets');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching tickets:', error);
      throw error; 
    }
  };
  
  export const updateTicketStatus = async (ticketId, status) => {
    try {
      const response = await fetch(`http://localhost:3001/api/tickets/${ticketId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
  
      if (!response.ok) {
        throw new Error('Failed to update ticket status');
      }
  
      return response.json(); 
    } catch (error) {
      console.error('Error updating ticket status:', error);
      throw error; 
    }
  };