import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Notification from './Notification';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [notification, setNotification] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // ✅ Invokes login authentication API
      const response = await axios.post('http://localhost:8080/login', formData);
      localStorage.setItem('token', response.data.token);
      setNotification('Login successful!');
      navigate('/appointments');
    } catch (error) {
      setNotification('Login failed: ' + error.message);
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input 
          name="email" 
          type="email" 
          placeholder="Email" 
          onChange={handleChange} 
          required 
        />
        <input 
          name="password" 
          type="password" 
          placeholder="Password" 
          onChange={handleChange} 
          required 
        />
        <button type="submit">Login</button>
      </form>
      {notification && <Notification message={notification} />}
    </div>
  );
};

export default Login;
