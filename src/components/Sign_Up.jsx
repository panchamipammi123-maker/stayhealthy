import React, { useState } from 'react';
import axios from 'axios';
import Notification from './Notification';

const Sign_Up = () => {
  const [formData, setFormData] = useState({
    role: 'patient',
    name: '',
    email: '',
    phone: '',
    password: ''
  });
  const [notification, setNotification] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // ✅ Invokes registration API
      const response = await axios.post('http://localhost:8080/register', formData);
      setNotification('User registered successfully!');
      console.log('Registration success:', response.data);
    } catch (error) {
      setNotification('Registration failed: ' + error.message);
      console.error('Registration error:', error);
    }
  };

  return (
    <div className="signup-form">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <select name="role" onChange={handleChange}>
          <option value="patient">Patient</option>
          <option value="doctor">Doctor</option>
        </select>
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="phone" placeholder="Phone" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
      {notification && <Notification message={notification} />}
    </div>
  );
};

export default Sign_Up;
