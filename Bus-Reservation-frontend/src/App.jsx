import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Mylogin from "./Pages/Mylogin";
import Homepage from "./Pages/Homepage";
import BusListPage from "./Pages/BusListPage";
import AdminPageWithRouter from "./Pages/Admin/AdminPage";
import SeatBooking from "./Components/SeatBooking";
// import DemoPayments from "./Components/DemoPayments";
import { UserProvider } from "./Context/UserContext";

function App() {
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/admin/*" element={<AdminPageWithRouter />}></Route>
            <Route path="/login" element={<Mylogin />}></Route>
            <Route path="/seat-booking" element={<SeatBooking />}></Route>
            {/* <Route path="/payment" element={<DemoPayments />}></Route> */}
            {/* check index.html for payments */}
            <Route path="/bus-list" element={<BusListPage />}></Route>
          </Routes>
        </BrowserRouter>
      </UserProvider>
      <ToastContainer />
    </>
  );
}

export default App;
