import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Select from 'react-select';

const AddBus = () => {
  const [busNo, setBusNo] = useState('');
  const [capacity, setCapacity] = useState('');
  const [selectedRouteId, setSelectedRouteId] = useState(''); 

  const routes = [
    { id: 1, source: 'Pune', destination: 'Mumbai' },
    { id: 2, source: 'Delhi', destination: 'Bangalore' },
    { id: 3, source: 'Kolkata', destination: 'Chennai' },
    // Add more sample route objects as needed
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    // Prepare the data for the backend (replace with your actual API call later)
    const newBusData = {
      busNo,
      capacity,
      schedule_id: selectedRouteId, 
    };

    console.log('Form submitted:', newBusData); 

    // Clear form fields after submission
    setBusNo('');
    setCapacity('');
    setSelectedRouteId(''); 
  };

  return (
    <div>
      <h2>Add Bus</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Bus No.</Form.Label>
          <Form.Control 
            type="text" 
            placeholder="Enter Bus No." 
            value={busNo} 
            onChange={(e) => setBusNo(e.target.value)} 
            required 
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Capacity</Form.Label>
          <Form.Control 
            type="number" 
            placeholder="Enter Capacity" 
            value={capacity} 
            onChange={(e) => setCapacity(e.target.value)} 
            required 
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Select Route</Form.Label>
          <Select 
            value={selectedRouteId} 
            onChange={(e) => setSelectedRouteId(e.target.value)} 
            options={routes.map((route) => ({ 
              value: route.id, 
              label: `${route.source} - ${route.destination}` 
            }))} 
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Bus
        </Button>
      </Form>
    </div>
  );
};

export default AddBus;