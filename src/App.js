import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard"; // Importing Dashboard
import Login from "./components/Login"; // Assuming you have a Login page
import Signup from "./components/Signup"; // Assuming you have a Signup page
import RoomManagement from "./components/RoomManagement"; // Importing RoomManagement
import QrCode from "./components/QrCode"; // Importing QrCode
import LandingPage from "./components/LandingPage"; // Importing LandingPage
import StudentDirectory from "./components/StudentDirectory";
import ForgetPassword from "./components/ForgetPassword"; // Importing ForgetPassword
import ComplainBox from "./components/ComplainBox"; // Importing ComplainBox
import RoomDetails from "./components/RoomDetails";
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<LandingPage />} /> {/* Landing Page Route */}
        <Route path="/login" element={<Login />} /> {/* Default Route */}
        <Route path="/dashboard" element={<Dashboard />} /> {/* Dashboard Route */}
        <Route path="login/dashboard" element={<Dashboard />} /> {/* Dashboard Route */}
        <Route path="/signup" element={<Signup />} /> {/* Signup Route */}
        <Route path="/rooms" element={<RoomManagement />} /> {/* Room Management Route */}
        <Route path="/payments" element={<QrCode />} /> {/* Payment*/}
        <Route path="/students" element={<StudentDirectory />} /> {/* Student Directory Route */}
        <Route path="/forget_pass" element={<ForgetPassword />} /> {/* Forget Password Route*/}
        <Route path="/complain_box" element={<ComplainBox />} /> 
        <Route path="/room-details" element={<RoomDetails />} />
      </Routes>
    </Router>
  );
}

export default App;