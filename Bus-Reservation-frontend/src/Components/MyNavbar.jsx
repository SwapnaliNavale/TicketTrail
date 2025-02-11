import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, Button, Dropdown } from "react-bootstrap";
import { useUser } from "../Context/UserContext.jsx";
import { logout } from "../Services/UserServices/user.js";

import logo from "../assets/logo.png";
import { BsChatText, BsPersonCircle } from "react-icons/bs";

const MyNavbar = () => {
  const { user, updateUser } = useUser();
  console.log("user: ", user); // check this if it is null or not
  const navigate = useNavigate();

   // Load authentication state from localStorage on mount
   useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setAuth({ token: storedToken }); // Only set auth state
    }
  }, [setAuth]);
  const handlelogout = async () => {
    const response = await logout();
    if (response?.status === "success") {
      navigate("/login");
    }
  };

  return (
    <Navbar
      bg="transparent"
      expand="lg"
      className="fixed-top shadow-sm py-2 border rounded m-2 "
      style={{ backdropFilter: "blur(10px)" }}
    >
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="logo"
            height="60"
            className="d-inline-block align-top rounded-circle border border-2 border-warning"
          />
        </Navbar.Brand>

        {/* Toggle Button for Mobile */}
        <Navbar.Toggle aria-controls="navbar-nav" />

        {/* Navbar Items */}
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto gap-3">
            <Nav.Link as={Link} to="/services" className="text-dark fw-bold">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/user/ticket" className="text-dark fw-bold">
              My Tickets
            </Nav.Link>
            <Nav.Link as={Link} to="/offers" className="text-dark fw-bold">
              Offers
            </Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-dark fw-bold">
              About
            </Nav.Link>
          </Nav>

          {/* Right-side Auth Links */}
          <Nav className="gap-2">
            {user?.token ? (   //i need to check here for error
              <>
                <Dropdown>
                  <Dropdown.Toggle
                    variant="outlined-warning rounded"
                    id="dropdown-basic"
                  >
                    <BsPersonCircle size={24} />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={updateUser}
                      as={Link}
                      to="/user/profile"
                    >
                      Profile
                    </Dropdown.Item>
                    <Dropdown.Item onClick={handlelogout}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </>
            ) : (
              <>
                <Button
                  as={Link}
                  to="/login"
                  variant="outline-warning"
                  className="rounded-pill px-3"
                >
                  Login
                </Button>
                <Button
                  as={Link}
                  to="/register"
                  variant="outline-success"
                  className="rounded-pill px-3"
                >
                  Signup
                </Button>
              </>
            )}

            <Button
              as={Link}
              to="/users/notification"
              variant="outline-warning"
              className="rounded-pill text-dark px-3"
            >
              <BsChatText size={20} />
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;

// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { Navbar, Nav, Container, Button, Dropdown } from 'react-bootstrap';
// // import { UserContext } from '../context/UserContext';

// const MyNavbar = () => {
//   const { user, logout } = useContext(UserContext);

//   return (
//     <Navbar bg="light" expand="lg">
//       <Container>
//         {/* ... your Navbar components */}

//         <Nav>
//           {user ? (
//             <>
//               <Dropdown>
//                 <Dropdown.Toggle variant="success" id="dropdown-basic">
//                   {user.username || 'Profile'}
//                 </Dropdown.Toggle>

//                 <Dropdown.Menu>
//                   <Dropdown.Item as={Link} to="/profile">
//                     Profile
//                   </Dropdown.Item>
//                   <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
//                 </Dropdown.Menu>
//               </Dropdown>
//             </>
//           ) : (
//             <>
//               <Button as={Link} to="/login" variant="primary">
//                 Login
//               </Button>
//               <Button as={Link} to="/register" variant="secondary">
//                 Register
//               </Button>
//             </>
//           )}
//         </Nav>
//       </Container>
//     </Navbar>
//   );
// };

// export default MyNavbar;
