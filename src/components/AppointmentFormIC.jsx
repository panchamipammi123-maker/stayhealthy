import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AppointmentFormIC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    doctorName: '',
    date: '',
    time: '',
    patientName: '',
    phone: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // ✅ Simulate booking success
    localStorage.setItem('latestBooking', JSON.stringify(formData));
    alert('✅ Appointment booked successfully!');
    navigate('/profile');
  };

  return (
    <div className="appointment-form">
      <h2>Book Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          abel>Doctor Name:</label>
          <input
            type="text"
            name="doctorName"
            value={formData.doctorName}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          abel>Date:</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          abel>Time:</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          abel>Patient Name:</label>
          <input
            type="text"
            name="patientName"
            value={formData.patientName}
            onChange={handleChange}
            required
          />
        </div>
        
        <div>
          abel>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        
        <button type="submit">Book Appointment</button>
      </form>
    </div>
  );
};

export default AppointmentFormIC;
