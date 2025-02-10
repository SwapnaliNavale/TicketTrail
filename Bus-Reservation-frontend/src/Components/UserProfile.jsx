// import React, { useState, useContext, useEffect } from 'react'; 
// import { Form, Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';
// import {  useUser } from "../Context/UserContext.jsx";

// const UserProfile = () => {
//   const { user } = useUser();
//   const navigate = useNavigate();
//   const [userData, setUserData] = useState(user); 

//   useEffect(() => {
//     setUserData(user);
//   }, [user]);

//   const handleChange = (e) => {
//     setUserData({ ...userData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       // Make API call to update user profile (replace with your actual API endpoint)
//       const response = await fetch(`/users/profile/${user._id}`, {
//         method: 'PUT',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ 
//           firstName: userData.firstName, 
//           lastName: userData.lastName, 
//           // ... other fields to update 
//         }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to update profile');
//       }

//       const updatedUser = await response.json();
//       setUserData(updatedUser); // Update user data in state

//       // Optionally, update user data in UserContext (if needed)
//       // setUser(updatedUser); 

//     } catch (error) {
//       console.error('Error updating profile:', error);
//       // Handle error (e.g., display an error message to the user)
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2>User Profile</h2>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="firstName">
//           <Form.Label>First Name</Form.Label>
//           <Form.Control 
//             type="text" 
//             name="firstName" 
//             value={userData?.firstName || ''} 
//             onChange={handleChange} 
//           />
//         </Form.Group>

//         <Form.Group controlId="lastName">
//           <Form.Label>Last Name</Form.Label>
//           <Form.Control 
//             type="text" 
//             name="lastName" 
//             value={userData?.lastName || ''} 
//             onChange={handleChange} 
//           />
//         </Form.Group>

//         {/* Add more fields for other user details here */}

//         <Button variant="primary" type="submit">
//           Update Profile
//         </Button>
//       </Form>
//     </div>
//   );
// };

// export default UserProfile;

import React, { useState, useContext, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useUser } from "../Context/UserContext.jsx";

const UserProfile = () => {
  const { user, updateUser } = useUser();
  const navigate = useNavigate();
  const [userData, setUserData] = useState(user); 

  useEffect(() => {
    setUserData(user);
  }, [user]);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make API call to update user profile (replace with your actual API endpoint)
      const response = await fetch(`/users/profile/${user._id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          firstName: userData.firstName, 
          lastName: userData.lastName, 
          dob: userData.dob, 
          mobileNo: userData.mobileNo, 
          gender: userData.gender, 
          address: { 
            adrLine1: userData.address.adrLine1, 
            adrLine2: userData.address.adrLine2, 
            city: userData.address.city, 
            state: userData.address.state, 
            zipCode: userData.address.zipCode 
          }
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update profile');
      }

      const updatedUser = await response.json();
      setUserData(updatedUser); 
      updateUser(updatedUser); // Update user data in UserContext

    } catch (error) {
      console.error('Error updating profile:', error);
      // Handle error (e.g., display an error message to the user)
    }
  };

  return (
    <div className="container mt-5">
      <h2>User Profile</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control 
            type="text" 
            name="firstName" 
            value={userData?.firstName || ''} 
            onChange={handleChange} 
          />
        </Form.Group>

        <Form.Group controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control 
            type="text" 
            name="lastName" 
            value={userData?.lastName || ''} 
            onChange={handleChange} 
          />
        </Form.Group>

        <Form.Group controlId="dob">
          <Form.Label>Date of Birth</Form.Label>
          <Form.Control 
            type="date" 
            name="dob" 
            value={userData?.dob || ''} 
            onChange={handleChange} 
          />
        </Form.Group>

        <Form.Group controlId="mobileNo">
          <Form.Label>Mobile Number</Form.Label>
          <Form.Control 
            type="tel" 
            name="mobileNo" 
            value={userData?.mobileNo || ''} 
            onChange={handleChange} 
          />
        </Form.Group>

        <Form.Group controlId="gender">
          <Form.Label>Gender</Form.Label>
          <Form.Select 
            name="gender" 
            value={userData?.gender || ''} 
            onChange={handleChange} 
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </Form.Select>
        </Form.Group>

        <Form.Group controlId="addressLine1">
          <Form.Label>Address Line 1</Form.Label>
          <Form.Control 
            type="text" 
            name="address.adrLine1" 
            value={userData?.address?.adrLine1 || ''} 
            onChange={handleChange} 
          />
        </Form.Group>

        <Form.Group controlId="addressLine2">
          <Form.Label>Address Line 2</Form.Label>
          <Form.Control 
            type="text" 
            name="address.adrLine2" 
            value={userData?.address?.adrLine2 || ''} 
            onChange={handleChange} 
          />
        </Form.Group>

        <Form.Group controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control 
            type="text" 
            name="address.city" 
            value={userData?.address?.city || ''} 
            onChange={handleChange} 
          />
        </Form.Group>

        <Form.Group controlId="state">
          <Form.Label>State</Form.Label>
          <Form.Control 
            type="text" 
            name="address.state" 
            value={userData?.address?.state || ''} 
            onChange={handleChange} 
          />
        </Form.Group>

        <Form.Group controlId="zipCode">
          <Form.Label>Zip Code</Form.Label>
          <Form.Control 
            type="text" 
            name="address.zipCode" 
            value={userData?.address?.zipCode || ''} 
            onChange={handleChange} 
          />
        </Form.Group>

        <Button className='mt-3 w-100' variant="secondary" type="submit">
          Update Profile
        </Button>
      </Form>
    </div>
  );
};

export default UserProfile;