import React, { useState } from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import NavbarAdmin from "./Components/NavbarAdmin";

import EditUserDetails from "./Components/EditUserDetails";
// import UserTicketList from "./Components/UserTicketList";
import AddBus from "./Components/AddBus";
import AddRoute from "./Components/AddRoute";
import AddSchedule from "./Components/AddSchedules";

import UserTickets from "./Components/UserTickets";
import ManageUserDetails from "./Components/ManageUserDetails";
import Dashboard from "./Components/Dashboard";

const AdminLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <NavbarAdmin />

      <div style={{ marginTop: "100px" }} className="d-flex">
        <div
          className={`bg-light border-right z-3 ${
            isSidebarOpen ? "d-block" : "d-none"
          }`}
          style={{ width: "180px" }}
        >
          <button
            className={`btn btn-sm m-3 ${
              isSidebarOpen ? "btn-danger" : "btn-success"
            }`}
            onClick={toggleSidebar}
            // style={{ position: 'absolute', top: '130px', left: '100px', zIndex: '100' }}
          >
            {isSidebarOpen ? "Close" : "Open"}
          </button>

          <nav className="nav flex-column bg-transparent">
            <h5 className="text-xl font-bold mb-2 p-2 bg-secondary">
              Admin Panel
            </h5>
            <ul className="space-y-4">
              <li>
                <Link
                  to="add-route"
                  className="block p-2 rounded hover:bg-gray-700 nav-link"
                >
                  Add Route
                </Link>
              </li>

              <li>
                <Link
                  to="add-bus"
                  className="block p-2 rounded hover:bg-gray-700 nav-link"
                >
                  Add Bus
                </Link>
              </li>
              <li>
                <Link
                  to="add-schedule"
                  className="block p-2 rounded hover:bg-gray-700 nav-link"
                >
                  Schedule Bus
                </Link>
              </li>
              <li>
                <Link
                  to="users"
                  className="block p-2 rounded hover:bg-gray-700 nav-link"
                >
                  Manage Users
                </Link>
              </li>
              <li>
                <Link
                  to="tickets"
                  className="block p-2 rounded hover:bg-gray-700 nav-link"
                >
                  Manage Tickets
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="p-4 w-100">
          {/* Main content area */}
          <Outlet />
        </div>
      </div>
    </>
  );
};

const AdminPageWithRouter = () => (
  <Routes>
    <Route path="/" element={<AdminLayout />}>
      <Route index element={<Dashboard/>}/>
      <Route path="add-bus" element={<AddBus />} />
      <Route path="add-route" element={<AddRoute />} />
      <Route path="tickets" element={<ManageTickets />} />
      <Route path="users" element={<ManageUserDetails/>}/>
      <Route path="add-schedule" element={<AddSchedule />} />
      <Route path="edit-user/:userId" element={<EditUserDetails />} />
      {/* <Route path="user-tickets/:userId" element={<UserTicketList />} /> */}
      <Route path="user-tickets/:userId" element={<UserTickets />} />
    </Route>
  </Routes>
);

export default AdminPageWithRouter;
