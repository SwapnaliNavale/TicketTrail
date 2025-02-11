// import React, { useState, useEffect } from "react";
// import { Form, Button, FormSelect } from "react-bootstrap";
// import { getBuses, addBus } from "../../../Services/AdminServices/busService";
// import { getRoutes } from "../../../Services/AdminServices/routeService";
// import { Table } from "react-bootstrap";

// const AddBus = () => {
//   const [busNo, setBusNo] = useState("");
//   const [capacity, setCapacity] = useState("");
//   const [selectedRoute, setSelectedRoute] = useState(null);
//   const [routes, setRoutes] = useState([]);
//   const [buses, setBuses] = useState([]);

//   //testing data
//   // const routes = [
//   //   { id: 1, source: 'Pune', destination: 'Mumbai' },
//   //   { id: 2, source: 'Delhi', destination: 'Bangalore' },
//   //   { id: 3, source: 'Kolkata', destination: 'Chennai' },

//   // ];

//   // Fetch routes and buses on component mount
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const fetchedRoutes = await getRoutes();
//         const fetchedBuses = await getBuses();
//         setRoutes(fetchedRoutes.data);
//         setBuses(fetchedBuses.data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     //creating request body
//     const newBusData = {
//       busNo,
//       capacity: parseInt(capacity, 20),
//       schedule_id: selectedRoute, //i can get error here
//     };
//     try {
//       const response = await addBus(newBusData);
//       console.log("Form submitted:", newBusData);

//       // Clearing form fields after submission
//       setBusNo("");
//       setCapacity("");
//       selectedRoute("");

//       //refresh bus list
//       const updatedBusList = await getBuses();
//       setBuses(updatedBusList);
//     } catch (error) {
//       console.log("Error while adding a bus", error);
//     }
//   };
//   // Format routes for react-select
//   const routeOptions = routes.map((route) => ({
//     value: route.id,
//     label: `${route.source} <---> ${route.destination}`,
//   }));
//   return (
//     <div>
//       <h2>Add Bus</h2>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group className="mb-3">
//           <Form.Label>Bus No.</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Enter Bus No."
//             value={busNo}
//             onChange={(e) => setBusNo(e.target.value)}
//             required
//           />
//         </Form.Group>

//         <Form.Group className="mb-3">
//           <Form.Label>Capacity</Form.Label>
//           <Form.Control
//             type="number"
//             placeholder="Enter Capacity"
//             value={capacity}
//             onChange={(e) => setCapacity(e.target.value)}
//             required
//           />
//         </Form.Group>

//         <Form.Group className="mb-3">
//           <Form.Label>Select Route</Form.Label>
//           {/* <Select
//             value={selectedRouteId}
//             onChange={(e) => setSelectedRouteId(e.target.value)}
//             options={routes.map((route) => ({
//               value: route.id,
//               label: `${route.source} - ${route.destination}`,
//             }))}
//           /> */}
//           {/* <Form.Select 
//             value={selectedRoute?.value} // Access selected value directly
//             onChange={(e) => setSelectedRoute({ value: e.target.value })} // Set selectedRoute with value and label
//             aria-label="Default select example"
//           >
//             <option value="">Select a route</option>
//             {routeOptions.map((option) => (
//               <option key={option.value} value={option.value}>
//                 {option.label}
//               </option>
//             ))}
//           </Form.Select> */}
//           <Form.Select
//             value={selectedRoute || ""}
//             onChange={(e) => setSelectedRoute(Number(e.target.value))}
//             aria-label="Default select example"
//           >
//             <option value="">Select a route</option>
//             {routes.map((route) => (
//               <option key={route.id} value={route.id}>
//                 {route.source} → {route.destination}
//               </option>
//             ))}
//           </Form.Select>
//         </Form.Group>

//         <Button variant="primary" type="submit">
//           Add Bus
//         </Button>
//       </Form>
//       {/* Display fetched buses in a table */}
//       <h3>Buses</h3>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>Bus No.</th>
//             <th>Capacity</th>
//             <th>Route</th>
//           </tr>
//         </thead>
//         <tbody>
//           {buses.map((bus) => (
//             <tr key={bus.id}>
//               <td>{bus.busNo}</td>
//               <td>{bus.capacity}</td>
//               <td>
//                 {bus.route
//                   ? `${bus.route.source} - ${bus.route.destination}`
//                   : ""}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default AddBus;

import React, { useState, useEffect } from "react";
import { Form, Button, Table } from "react-bootstrap";
import { getBuses, addBus } from "../../../Services/AdminServices/busService";
import { getRoutes } from "../../../Services/AdminServices/routeService";

const AddBus = () => {
  const [busNo, setBusNo] = useState("");
  const [capacity, setCapacity] = useState("");
  const [selectedRoute, setSelectedRoute] = useState(""); 
  const [routes, setRoutes] = useState([]);
  const [buses, setBuses] = useState([]);

  // Fetch routes and buses on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedRoutes = await getRoutes();
        setRoutes(fetchedRoutes.data);  // Populate the dropdown

        const fetchedBuses = await getBuses();
        setBuses(fetchedBuses.data); // Populate the table
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!selectedRoute) {
      alert("Please select a route before adding a bus.");
      return;
    }

    const newBusData = {
      busNo,
      capacity: parseInt(capacity, 10),
      routeId: selectedRoute, // Send only the route ID
    };

    try {
      await addBus(newBusData);
      console.log("Bus added successfully:", newBusData);

      // Clear the form
      setBusNo("");
      setCapacity("");
      setSelectedRoute("");

      // Refresh the bus list
      const updatedBusList = await getBuses();
      setBuses(updatedBusList);
    } catch (error) {
      console.error("Error while adding a bus", error);
    }
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
          <Form.Select 
            value={selectedRoute} 
            onChange={(e) => setSelectedRoute(e.target.value)}
            aria-label="Select a route"
          >
            <option value="">Select a route</option>
            {routes.map((route) => (
              <option key={route.id} value={route.id}>
                {route.source} → {route.destination}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Button variant="primary" type="submit">
          Add Bus
        </Button>
      </Form>

      {/* Display fetched buses in a table */}
      <h3>Buses</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Bus No.</th>
            <th>Capacity</th>
            <th>Route</th>
          </tr>
        </thead>
        <tbody>
          {buses.map((bus) => (
            <tr key={bus.id}>
              <td>{bus.busNo}</td>
              <td>{bus.capacity}</td>
              <td>{bus.route ? `${bus.route.source} → ${bus.route.destination}` : 'N/A'}</td> 
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AddBus;

