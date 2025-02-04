import React, { useState } from "react";
import { Table, Button } from "react-bootstrap";
import { FaPencilAlt, FaTrash, FaArrowUp, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ManageUserDetails = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      first_name: "John",
      last_name: "Doe",
      email: "john@example.com",
      role: "user",
    },
    {
      id: 2,
      first_name: "Jane",
      last_name: "Smith",
      email: "jane@example.com",
      role: "admin",
    },
    {
      id: 3,
      first_name: "Bob",
      last_name: "Johnson",
      email: "bob@example.com",
      role: "user",
    },
  ]);

  const navigate = useNavigate();

  const handleEdit = (userId) => {
    console.log("Edit user", userId);
    navigate(`/admin/edit-user/${userId}`);
  };

  const handleDelete = (userId) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(users.filter((user) => user.id !== userId));
    }
  };

  const handlePromote = (userId) => {
    setUsers(
      users.map((user) =>
        user.id === userId ? { ...user, role: "admin" } : user
      )
    );
  };

  const handleViewTickets = (userId) => {
    navigate(`/admin/user-tickets/${userId}`);
  };

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Manage User Details</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>
                {user.first_name} {user.last_name}
              </td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <Button
                  onClick={() => handleEdit(user.id)}
                  variant="outline-primary"
                  className="mr-2 btn-sm"
                >
                  <FaPencilAlt size={16} />
                </Button>
                <Button
                  onClick={() => handleDelete(user.id)}
                  variant="danger"
                  className="mx-2 btn-sm"
                >
                  <FaTrash size={16} />
                </Button>
                {user.role !== "admin" && (
                  <Button
                    className="btn-sm"
                    onClick={() => handlePromote(user.id)}
                    variant="success"
                  >
                    <FaArrowUp size={16} />
                  </Button>
                )}
                <Button
                  className="btn-sm ms-3"
                  onClick={() => handleViewTickets(user.id)}
                  variant="warning"
                >
                  <FaEye size={16} /> View Tickets
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ManageUserDetails;
