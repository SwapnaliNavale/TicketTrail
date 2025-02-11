import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import {
  getRoutes,
  addRoute,
} from "../../../Services/AdminServices/routeService";
import { Table } from "react-bootstrap";

const AddRoute = () => {
  const [destination, setDestination] = useState("");
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [source, setSource] = useState("");
  const [routes, setRoutes] = useState([]);

  // Ensure duration is always in "HH:mm:ss" format
  const formattedDuration = duration.length === 5 ? `${duration}:00` : duration;
  // const routes = [
  //   { id: 1, source: 'Pune', destination: 'Mumbai' },
  //   { id: 2, source: 'Delhi', destination: 'Bangalore' },
  //   { id: 3, source: 'Kolkata', destination: 'Chennai' },
  //   // Add more sample route objects as needed
  // ];

  // Fetch routes on component mount
  // useEffect(() => {
  //   const fetchRoutes = async () => {
  //     try {
  //       const fetchedRoutes = await getRoutes();
  //       setRoutes(fetchedRoutes);
  //     } catch (error) {
  //       console.error("Error fetching routes:", error);
  //     }
  //   };

  //   fetchRoutes();
  // }, []);
  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const response = await getRoutes();
        setRoutes(response.data); // Extract 'data' array
      } catch (error) {
        console.error("Error fetching routes:", error);
      }
    };
  
    fetchRoutes();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission here
    const newRouteData = {
      source,
      destination,
      distance: parseFloat(distance),
      // duration: parseFloat(duration),
      duration: formattedDuration,  // Ensures proper format
    };
    console.log("Form submitted:", { newRouteData });

    //Add route
    try {
      const response = await addRoute(newRouteData);
      console.log("Route Added", response);

      // Clear form fields after submission
      setSource("");
      setDestination("");
      setDistance("");
      setDuration("");
    } catch (error) {
      console.log("Error while adding route", error);
    }
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

        {/* <Form.Group className="mb-3">
          <Form.Label>Duration (in hours)</Form.Label>
          <Form.Control
            type="time"
            placeholder="Enter Duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
          />
        </Form.Group> */}
        {/* <Form.Group className="mb-3">
          <Form.Label>Duration (HH:mm:ss)</Form.Label>
          <Form.Control
            type="time"
            step="1" // Enables seconds (HH:mm:ss format)
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
          />
        </Form.Group> */}

        <Form.Group className="mb-3">
          <Form.Label>Duration (HH:mm:ss)</Form.Label>
          <Form.Control
            type="time"
            step="1" // Enables seconds (HH:mm:ss)
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Route
        </Button>
      </Form>
      {/* Display fetched routes */}
      <h3>Routes</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Source</th>
            <th>Destination</th>
            <th>Distance (km)</th>
            <th>Duration (hrs)</th>
          </tr>
        </thead>
        <tbody>
          {routes.map((route) => (
            <tr key={route.id}>
              <td>{route.source}</td>
              <td>{route.destination}</td>
              <td>{route.distance}</td>
              <td>{route.duration}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AddRoute;
