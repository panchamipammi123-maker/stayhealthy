import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SignUp from './components/Sign_Up';
import Login from './components/Login';
import FindDoctorSearch from './components/FindDoctorSearch';
import AppointmentFormIC from './components/AppointmentFormIC';
import GiveReviews from './components/GiveReviews';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<FindDoctorSearch />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/appointments" element={<AppointmentFormIC />} />
            <Route path="/profile" element={<GiveReviews />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
