import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const AddRoute = () => {
  const [destination, setDestination] = useState('');
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [source, setSource] = useState('');


  const routes = [
    { id: 1, source: 'Pune', destination: 'Mumbai' },
    { id: 2, source: 'Delhi', destination: 'Bangalore' },
    { id: 3, source: 'Kolkata', destination: 'Chennai' },
    // Add more sample route objects as needed
  ];
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    // Send data to backend (destination, distance, duration, source)
    console.log('Form submitted:', { destination, distance, duration, source }); 

    // Clear form fields after submission
    setDestination('');
    setDistance('');
    setDuration('');
    setSource('');
  };

  return (
    <div>
      <h2>Add Route</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Source</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter Source" 
            value={source} 
            onChange={(e) => setSource(e.target.value)} 
            required 
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Destination</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter Destination" 
            value={destination} 
            onChange={(e) => setDestination(e.target.value)} 
            required 
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Distance (in km)</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="Enter Distance" 
            value={distance} 
            onChange={(e) => setDistance(e.target.value)} 
            required 
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Duration (in hours)</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="Enter Duration" 
            value={duration} 
            onChange={(e) => setDuration(e.target.value)} 
            required 
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Route
        </Button>
      </Form>
    </div>
  );
};

export default AddRoute;