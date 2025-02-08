import React, { useState, useContext, useEffect } from 'react'; // Corrected import statement
import { Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
// import { UserContext } from '../context/UserContext';

const UserProfile = () => {
  const { user, logout } = useContext(UserContext);
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
          // ... other fields to update 
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update profile');
      }

      const updatedUser = await response.json();
      setUserData(updatedUser); // Update user data in state

      // Optionally, update user data in UserContext (if needed)
      // setUser(updatedUser); 

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

        {/* Add more fields for other user details here */}

        <Button variant="primary" type="submit">
          Update Profile
        </Button>
      </Form>
    </div>
  );
};

export default UserProfile;