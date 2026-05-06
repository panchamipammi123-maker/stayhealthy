const registerUser = async (userData) => {
  try {
    const response = await axios.post('http://localhost:5000/api/auth/register', userData);
    localStorage.setItem('token', response.data.token);
    alert('✅ Registration successful!');
    navigate('/login');
  } catch (error) {
    alert('❌ Registration failed: ' + error.response.data.message);
  }
};
