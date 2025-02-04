import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Mylogin from "./Pages/Mylogin";
import Homepage from "./Pages/Homepage";
import BusListPage from "./Pages/BusListPage";
import AdminPageWithRouter from "./Pages/Admin/AdminPage";
import Offers from "./Components/Offers";
import AboutUs from "./Components/AboutUs";
import Services from "./Components/Services";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          {/* <Route path="/admin-home" element={<AdminPage />}></Route> */}
          <Route path="/admin/*" element={<AdminPageWithRouter />}></Route>
          <Route path="/login" element={<Mylogin />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/offers" element={<Offers />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/bus-list" element={<BusListPage />}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
}

export default App;
