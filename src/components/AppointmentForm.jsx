import React, { useState } from 'react';

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // ✅ Task 18 REQUIRED: All 4 fields present
    console.log('Appointment Data:', formData);
    alert('✅ Appointment submitted!\n' + 
          `Name: ${formData.name}\n` +
          `Phone: ${formData.phoneNumber}\n` +
          `Date: ${formData.date}\n` +
          `Time: ${formData.time}`);
  };

  return (
    <div className="appointment-form">
      <h2>Book Your Appointment</h2>
      
      <form onSubmit={handleSubmit}>
        {/* ✅ REQUIRED: Name Field */}
        <div className="form-group">
          <label>Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </div>

        {/* ✅ REQUIRED: Phone Number Field */}
        <div className="form-group">
          <label>Phone Number *</label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            placeholder="Enter phone number"
            required
          />
        </div>

        {/* ✅ REQUIRED: Date Field */}
        <div className="form-group">
          <label>Date *</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={new Date().toISOString().split('T')[0]}
            required
          />
        </div>

        {/* ✅ REQUIRED: Time Field */}
        <div className="form-group">
          <label>Time *</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn">
          Submit Appointment
        </button>
      </form>
    </div>
  );
};

export default AppointmentForm;
