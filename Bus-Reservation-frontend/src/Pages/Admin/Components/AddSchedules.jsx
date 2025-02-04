import React, { useState, useEffect } from "react";
import { Form, Button, Table, FormSelect } from "react-bootstrap";
import Select from "react-select";
// import { getRoutes, getBuses } from '../services/apiService'; // Assuming you have this service

const AddSchedule = () => {
  const [arrivalTime, setArrivalTime] = useState("");
  const [departureTime, setDepartureTime] = useState("");
  const [selectedRouteId, setSelectedRouteId] = useState("");
  const [selectedBusId, setSelectedBusId] = useState("");
  const [routes, setRoutes] = useState([
    { id: 1, source: "Pune", destination: "Mumbai" },
    { id: 2, source: "Delhi", destination: "Bangalore" },
    { id: 3, source: "Kolkata", destination: "Chennai" },
    // Add more sample route objects as needed
  ]);
  const [buses, setBuses] = useState([
    //static data
    { id: 1, busNo: "MH 12 AB 3456", capacity: 50 },
    { id: 2, busNo: "KA 01 HK 7890", capacity: 40 },
    { id: 3, busNo: "TN 10 DL 5678", capacity: 30 },
  ]);
  const [schedules, setSchedules] = useState([
    {
      id: 1,
      arrivalTime: "09:00:00",
      departureTime: "10:00:00",
      route: { source: "Pune", destination: "Mumbai" },
      bus: { busNo: "MH 12 AB 3456" },
    },
    {
      id: 2,
      arrivalTime: "15:00:00",
      departureTime: "16:00:00",
      route: { source: "Delhi", destination: "Bangalore" },
      bus: { busNo: "KA 01 HK 7890" },
    },
    // Add more schedule objects as needed
  ]);

  useEffect(() => {
    const fetchRoutes = async () => {
      try {
        const fetchedRoutes = await getRoutes();
        setRoutes(fetchedRoutes);
      } catch (error) {
        console.error("Error fetching routes:", error);
      }
    };

    const fetchBuses = async () => {
      try {
        const fetchedBuses = await getBuses();
        setBuses(fetchedBuses);
      } catch (error) {
        console.error("Error fetching buses:", error);
      }
    };

    fetchRoutes();
    fetchBuses();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Prepare the data for the backend (replace with your actual API call later)
    const newScheduleData = {
      arrivalTime,
      departureTime,
      route_id: selectedRouteId,
      bus_id: selectedBusId,
    };

    console.log("Form submitted:", newScheduleData);

    // Clear form fields after submission
    setArrivalTime("");
    setDepartureTime("");
    setSelectedRouteId("");
    setSelectedBusId("");
  };

  return (
    <div>
      <h2>Add Schedule</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Arrival Time</Form.Label>
          <Form.Control
            type="time"
            placeholder="Enter Arrival Time"
            value={arrivalTime}
            onChange={(e) => setArrivalTime(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Departure Time</Form.Label>
          <Form.Control
            type="time"
            placeholder="Enter Departure Time"
            value={departureTime}
            onChange={(e) => setDepartureTime(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Select Route</Form.Label>
          <FormSelect
            aria-label="Default select example"
            value={selectedRouteId}
            onChange={(e) => setSelectedRouteId(e.target.value)}
          >
            <option value="">Select Route</option>
            {routes.map((route) => (
              <option key={route.id} value={route.id}>
                {route.source} - {route.destination}
              </option>
            ))}
          </FormSelect>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Select Bus</Form.Label>
          <FormSelect
            aria-label="Default select example"
            value={selectedBusId}
            onChange={(e) => setSelectedBusId(e.target.value)}
          >
            <option value="">Select Bus</option>
            {buses.map((bus) => (
              <option key={bus.id} value={bus.id}>
                Bus No: {bus.busNo}
              </option>
            ))}
          </FormSelect>
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Schedule
        </Button>
      </Form>

      {/* Optional: Display added schedules in a table */}
      <h3>Schedules</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Schedule Id</th>
            <th>Arrival Time</th>
            <th>Departure Time</th>
            <th>Route</th>
            <th>Bus</th>
          </tr>
        </thead>
        <tbody>
          {schedules.map((schedule) => (
            <tr key={schedule.id}>
              <td>{schedule.id}</td>
              <td>{schedule.arrivalTime}</td>
              <td>{schedule.departureTime}</td>
              <td>
                {schedule.route.source} - {schedule.route.destination}
              </td>
              <td>{schedule.bus.busNo}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AddSchedule;
