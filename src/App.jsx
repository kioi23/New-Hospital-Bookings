import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Booking from "./pages/Booking";
import AppointmentForm from "./pages/AppointmentForm";
import BookingPage from "./components/bookingpage";
import Signin from "./components/Signin";
import Register from "./components/Register";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/appointment" element={<Booking />} />
        <Route path="/booking/:id" element={<BookingPage />} />
        <Route path="/book/:id" element={<AppointmentForm />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
